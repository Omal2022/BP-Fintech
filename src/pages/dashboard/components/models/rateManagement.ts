interface ImageAndCountry {
  img: string;
  country: string;
}

interface Figure {
  buy: number;
  sell: number;
}

interface RateItem extends ImageAndCountry, Figure {}

export const RateManagement: RateItem[] = [
  {
    img: "/flags/ngn.svg",
    country: "USDT/NGN",
    buy: 1943.32,
    sell: 1943.32,
  },
  {
    img: "/flags/uae.svg",
    country: "USDT/UAE",
    buy: 1943.32,
    sell: 1943.32,
  },
  {
    img: "/flags/usd.svg",
    country: "USDT/USD",
    buy: 1943.32,
    sell: 1943.32,
  },
  {
    img: "/flags/gbp.svg",
    country: "USDT/GBP",
    buy: 1943.32,
    sell: 1943.32,
  },
  {
    img: "/flags/kes.svg",
    country: "USDT/KES",
    buy: 1943.32,
    sell: 1943.32,
  },
];
