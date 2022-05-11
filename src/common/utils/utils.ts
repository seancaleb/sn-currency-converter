import axios, { AxiosError } from "axios";
import { ConvertedCurrency, Currency } from "../../../types";

export const fetchCurrencies = async (): Promise<Currency[]> => {
  try {
    const currencies = await (
      await axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
      )
    ).data;

    return Object.keys(currencies).map(
      (curr): Currency => ({ name: currencies[curr], symbol: curr })
    );
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      throw error;
    } else {
      console.log(error);
      throw error;
    }
  }
};

export const fetchConvertedValue = async (
  selectedFrom: Currency,
  selectedTo: Currency
): Promise<ConvertedCurrency> => {
  try {
    const convertedValue = await (
      await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedFrom.symbol}/${selectedTo.symbol}.json`
      )
    ).data;

    return {
      date: convertedValue.date,
      currency: {
        name: Object.keys(convertedValue)[1],
        value: Object.values(convertedValue)[1] as number,
      },
    };
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw error;
    } else {
      console.log(error);
      throw error;
    }
  }
};
