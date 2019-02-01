import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/core/services';
import { WeekendTotals, Summary, ViewDataCollection, WeekendTotalsCollection } from '@app/core/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  //public totals$: Observable<WeekendTotalsCollection>;

  private totalsCollection: WeekendTotalsCollection = null;
  public gridData: WeekendTotals[];
  public summary$ : Observable<Summary>;

  public categories: any[];
  public seriesData: any[];//  [weekend:string]: [series: number[]];

  public regionData: any[];
  public regionCategories:any[];
  public weekends: string[];

  displayedColumns: string[] = ['WeekEndDate','spend','savings','lum_qty'];
  totalsArr: any;

  constructor(private dataService: DataService) { 
    this.seriesData = [];
    this.categories = [];
    this.regionData = [];
    this.regionCategories = [];
  }

  ngOnInit() {
    this.dataService.getWeekendTotals().subscribe(d => {
      
      let { savings, lum_qty, spend } = this.initTotalLists();
      //let categories: string[] = [];
      var start= d.length-5; 
      for(var i=start; i<d.length; i++) {
        //this.gridData.push(d[i]);
        this.categories.push(d[i].WeekEndDate);
        savings.data.push(d[i].savings.toFixed(2));
        lum_qty.data.push(d[i].lum_qty);
        spend.data.push(d[i].spend.toFixed(2));
      }
      this.seriesData.push(savings, lum_qty, spend);

    });

    this.summary$ = this.dataService.getSummary();

    this.dataService.retrieveComparison('region').subscribe(d => {
      let { curr_spend, curr_save, p4_avg_spend, p4_avg_save, ytd_avg_spend, ytd_avg_save } = this.initRegionLists();
      for(var i=0; i<d.length; i++) {
        this.regionCategories.push(d[i].FilterName);
        curr_spend.data.push(d[i].curr_spend.toFixed(2));
        curr_save.data.push(d[i].curr_savings.toFixed(2));
        p4_avg_spend.data.push(d[i].prev_avg_spend.toFixed(2));
        p4_avg_save.data.push(d[i].prev_avg_save.toFixed(2));
        ytd_avg_spend.data.push(d[i].ytd_avg_spend.toFixed(2));
        ytd_avg_save.data.push(d[i].ytd_avg_save.toFixed(2));
      }
      this.regionData.push(curr_spend, curr_save, p4_avg_spend, p4_avg_save, ytd_avg_spend, ytd_avg_save);
    })




  }

  public onTabSelect(e) {
    console.log(e);
  }
  private initTotalLists() {
    let savings = { name: 'Savings', data: [] };
    let lum_qty = { name: 'LUM QTY', data: [] };
    let spend = { name: 'Spend', data: [] };
    return { savings, lum_qty, spend };
  }
  private initRegionLists() { 
    let curr_spend = { name: 'Curr spend', data: [] };
    let curr_save = { name: 'Curr save', data: [] };
    let p4_avg_spend = { name: 'P4 avg spend', data: [] };
    let p4_avg_save = { name: 'P4 avg save', data: [] };
    let ytd_avg_spend = { name: 'Ytd avg spend', data: [] };
    let ytd_avg_save  = { name: 'Ytd avg save', data: [] };
    return {curr_spend, curr_save, p4_avg_spend, p4_avg_save, ytd_avg_spend, ytd_avg_save};
  }
  // https://supplychainapidev.stewardappsuite.com/api/insights/summary
  //   if (this.totals$) {
  //     this.totals$.unsubscribe();
  //   }
  // }
}
