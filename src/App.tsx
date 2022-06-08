import { Flex, Heading, Input, Text, Button, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Currency, SelectType } from "../types";
import { CurrenciesContext } from "./common/components/CurrenciesProvider";
import Main from "./common/components/Main";
import styled from "styled-components";
import { fetchCurrencies } from "./common/utils/utils";
import ConvertedValue from "./common/components/ConvertedValue";
import useGetConvertedValue from "./common/hooks/useGetConvertedValue";
import InfoAlert from "./common/components/InfoAlert";
import ConvertCurrency from "./common/components/ConvertCurrency";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const { data } = useQuery<Currency[], Error>("currencies", fetchCurrencies);
  const context = useContext(CurrenciesContext);
  const [options, setOptions] = useState<SelectType[] | null>(null);
  const { data: convertedValue, isFetching, refetch, isError, error } = useGetConvertedValue();

  useEffect(() => {
    if (data) context?.setCurrencies(data);
  }, [data]);

  useEffect(() => {
    if (context?.currencies)
      setOptions(
        context?.currencies?.map((curr) => ({
          value: curr.symbol,
          label: `${curr.symbol.toUpperCase()} - ${curr.name}`,
          name: curr.name,
        }))
      );
  }, [context]);

  useEffect(() => {
    if (convertedValue && context?.selectedFrom && context?.selectedTo) {
      refetch();
    }
  }, [context]);

  const handleClick = () => {
    if (context?.selectedFrom && context?.selectedTo) {
      refetch();
    }
  };

  return (
    <Main>
      <Wrapper>
        <Flex flexDir="column" gap="5px">
          <Heading letterSpacing="-.75px" size="lg">
            Currency Converter
          </Heading>
          <Text color="gray.600" letterSpacing="-.25px">
            Check real time foreign currency exchange rates.
          </Text>
        </Flex>

        <ConvertCurrency options={options} />

        <Flex minH="110px" align="center">
          <AnimatePresence>
            {!isFetching && convertedValue && <ConvertedValue convertedValue={convertedValue} />}
            {isFetching && convertedValue && <Spinner size="lg" color="blue.500" />}
            {isError && (
              <Text fontSize="13px" color="red.500">
                A {error.message} occured. Please try again by using a different currency.
              </Text>
            )}
          </AnimatePresence>
        </Flex>

        <Flex
          gap="20px"
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "flex-start", lg: "flex-end" }}
          justifyContent="space-between"
        >
          <InfoAlert />
          {!convertedValue && (
            <Button
              onClick={handleClick}
              colorScheme="blue"
              isLoading={isFetching}
              loadingText="Converting"
              disabled={!context?.selectedFrom || !context?.selectedTo}
            >
              Convert value
            </Button>
          )}
          {convertedValue && (
            <Text color="gray.600" fontSize="13px" textAlign="start">
              Last updated at {convertedValue?.date}
            </Text>
          )}
        </Flex>
      </Wrapper>
    </Main>
  );
};

export default App;

const Wrapper = styled(Flex).attrs({
  flexDir: "column",
  w: "100%",
  bg: "white",
  justifyContent: "space-evenly",
  px: { base: "30px", md: "40px" },
  py: { base: "40px", md: "50px" },
  borderRadius: { base: "0px", sm: "10px" },
  boxShadow: "md",
  gap: "30px",
  minH: { base: "100vh", sm: "unset" },
})``;
