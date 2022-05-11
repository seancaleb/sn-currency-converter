export type Currency = {
  name: string;
  symbol: string;
};

export type ConvertedCurrency = {
  date: string;
  currency: {
    name: string;
    value: number;
  };
};

export type SelectType = {
  value: string;
  label: string;
  name: string;
};
