import { Injectable } from '@angular/core';

import {
  WeekendTotalsCollection,WeekendTotals,
  Summary,
  ViewData
} from '../../models/interfaces';

import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

    // URLs..
    private getWeekendTotalsUrl() {
      return environment.SupplyChainApi + '/api/insights/charts/totals';
    }
    private getSummaryUrl() {
      return environment.SupplyChainApi + '/api/insights/summary';
    }
    private getViewUrl(type: string) {
      return (
        environment.SupplyChainApi + '/api/insights/charts/comparison/' + type
      );
    }

  public getWeekendTotals(): Observable<WeekendTotals[]> {
    const _url = this.getWeekendTotalsUrl();
    return this.http.post<WeekendTotals[]>(_url, {}).pipe(
      map(r => {
        return r || [];
      })
    );
  }

  public getSummary(): Observable<Summary> {
    const _url = this.getSummaryUrl();
    return this.http.post<Summary>(_url, {}).pipe(
      map(r => {
        //console.log(r)
        return r;
      })
    );
  }

  public retrieveComparison(type: string): Observable<ViewData[]> {
    const _url = this.getViewUrl(type);
    return this.http.post<ViewData[]>(_url, {}).pipe(
      map(r => {
        return r;
      })
    );               
  }
}
/*
req: https://supplychainapidev.stewardappsuite.com/api/insights/charts/totals
response:
{
    "curr_wk_lum_qty": 4544786,
    "curr_wk_spend": 5263978.2392,
    "curr_wk_savings": -891138.5804,
    "prev_wks_lum_qty": 3900713,
    "prev_wks_spend": 18512360.6845,
    "prev_wks_savings": -7290352.6482,
    "prev_wks_avg_save": -1822588.1675,
    "prev_wks_avg_spend": 4628090.1955,
    "ytd_lum_qty": 4420264,
    "ytd_spend": 245319971.4534,
    "ytd_savings": -238583895.5944,
    "ytd_avg_save": -5057292.7063,
    "ytd_avg_spend": 5107574.3105
}



response:
[
    {
        "lum_qty": 2330354,
        "spend": 2317692.5648,
        "savings": 454756.016,
        "WeekEndDate": "01/06/2018"
    },
]

*/
