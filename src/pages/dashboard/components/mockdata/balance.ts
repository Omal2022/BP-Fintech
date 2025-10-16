import { type BalanceItem } from "../../../../types/dashboard";
export const Balance: BalanceItem[] = [
  {
    id: "btc",
    coin: {
      img: "/icons/blu1.svg",
      alt: "Bitcoin",
      coinName: "Bitcoin",
    },
    amount: {
      figure: 5530.9,
      currency: "$",
      percentage: 90,
    },
  },
  {
    id: "eth",
    coin: {
      img: "/icons/blu2.svg",
      alt: "Ethereum",
      coinName: "Ethereum",
    },
    amount: {
      figure: 1943.32,
      currency: "$",
      percentage: 32,
    },
  },
  {
    id: "usdt",
    coin: {
      img: "/icons/blu3.svg",
      alt: "Tether",
      coinName: "Tether",
    },
    amount: {
      figure: 100.0,
      currency: "$",
      percentage: 10,
    },
  },
  {
    id: "bnb",
    coin: {
      img: "/icons/blu4.svg",
      alt: "Binance Coin",
      coinName: "Binance Coin",
    },
    amount: {
      figure: 1943.32,
      currency: "$",
      percentage: 43,
    },
  },
];
