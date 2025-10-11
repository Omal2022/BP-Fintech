// Define the structure for each metric
interface DashboardMetric {
  text: string;
  figure: number;
}

interface DashboardData {
  TotalVolumeTransacted: DashboardMetric;
  TotalUsers: DashboardMetric;
  ActiveUsers: DashboardMetric;
  TotalCount: DashboardMetric;
  TotalDeposite: DashboardMetric;
  TotalWithdraws: DashboardMetric;
}

// Export the actual data
export const Dashboard: DashboardData = {
  TotalVolumeTransacted: {
    text: "Total Volume Transacted",
    figure: 3430309.0,
  },
  TotalUsers: {
    text: "Total Users",
    figure: 15303,
  },
  ActiveUsers: {
    text: "Active Users",
    figure: 10392,
  },
  TotalDeposite: {
    text: "Total Deposite",
    figure: 23887,
  },
  TotalWithdraws: {
    text: "Total Withdraw",
    figure: 76769,
  },
  TotalCount: {
    text: "Transaction Count",
    figure: 125000.75,
  },
};
