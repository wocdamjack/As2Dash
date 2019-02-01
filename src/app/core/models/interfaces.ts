
export interface WeekendTotalsCollection {
  Numbers: WeekendTotals[];
}

export interface WeekendTotals {
    lum_qty: number;
    spend: number;
    savings: number;
    WeekEndDate: string;
}

export interface Summary {
  curr_wk_lum_qty: number;
  curr_wk_spend: number;
  curr_wk_savings: number;
  prev_wks_lum_qty: number;
  prev_wks_spend: number;
  prev_wks_savings: number;
  prev_wks_avg_save: number;
  prev_wks_avg_spend: number;
  ytd_lum_qty: number;
  ytd_spend: number;
  ytd_savings: number;
  ytd_avg_save: number;
  ytd_avg_spend: number;
}

export interface ViewDataCollection {
  Numbers: ViewData[];
}
export interface ViewData {
    FilterName: string;
    curr_spend: number;
    curr_savings: number;
    prev_save_var: number;
    prev_spend_var: number;
    prev_avg_save: number;
    prev_avg_spend: number;
    ytd_save_var: number;
    ytd_spend_var: number;
    ytd_avg_save: number;
    ytd_avg_spend: number;
}

