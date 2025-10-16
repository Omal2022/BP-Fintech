export interface DashboardMetric {
  id: string;
  text: string;
  figure: number;
  currency?: string;
}

export interface RateItem {
  id: string;
  img: string;
  country: string;
  buy: number;
  sell: number;
}

interface Icon {
  img: string;
  alt: string;
  coinName: string;
}

interface Price {
  figure: number;
  currency: string;
  percentage: number;
}

export interface BalanceItem {
  id: string;
  coin: Icon;
  amount: Price;
}

export type ActivityStatus = "Completed" | "Pending" | "Failed";

export interface RecentActivityItem {
  id: string;
  type: string;
  user: string;
  amount: string;
  date: string;
  time: string;
  status: ActivityStatus;
}
