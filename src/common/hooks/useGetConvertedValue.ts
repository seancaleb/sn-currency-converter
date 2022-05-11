import { useContext } from "react";
import { useQuery } from "react-query";
import { ConvertedCurrency, Currency } from "../../../types";
import { CurrenciesContext } from "../components/CurrenciesProvider";
import { fetchConvertedValue } from "../utils/utils";

const useGetConvertedValue = () => {
  const context = useContext(CurrenciesContext);

  return useQuery<ConvertedCurrency, Error>(
    ["converted-currency", context?.selectedFrom?.symbol, context?.selectedTo?.symbol],
    () => fetchConvertedValue(context?.selectedFrom as Currency, context?.selectedTo as Currency),
    {
      enabled: false,
      keepPreviousData: true,
    }
  );
};

export default useGetConvertedValue;
