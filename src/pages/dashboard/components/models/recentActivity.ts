export interface RecentActivityItem {
  type: string;
  user: string;
  amount: string;
  date: string;
  time: string;
  status: "Completed" | "Pending" | "Failed";
}

export const RecentActivities: RecentActivityItem[] = [
  {
    type: "Withdrawal",
    user: "Abdulrazeez Abdulyaniu",
    amount: "0.000343 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Deposit",
    user: "Abdulrazeez Abdulyaniu",
    amount: "31,300.000343 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Deposit",
    user: "Abdulrazeez Abdulyaniu",
    amount: "50,000.23 NGN",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Savings",
    user: "Abdulrazeez Abdulyaniu",
    amount: "100.03 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Airtime",
    user: "Abdulrazeez Abdulyaniu",
    amount: "10.03 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Data Subscription",
    user: "Abdulrazeez Abdulyaniu",
    amount: "5.20 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Electricity",
    user: "Abdulrazeez Abdulyaniu",
    amount: "15.29 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
  {
    type: "Fiat Withdrawal",
    user: "Abdulrazeez Abdulyaniu",
    amount: "8.49 USDT",
    date: "24th Nov, 2024",
    time: "12:12AM",
    status: "Completed",
  },
];
