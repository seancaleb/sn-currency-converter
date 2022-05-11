import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";
import Select, { SingleValue } from "react-select";
import styled from "styled-components";
import { SelectType } from "../../../types";
import { CurrenciesContext } from "./CurrenciesProvider";

type Props = {
  options: SelectType[] | null;
};

const ConvertCurrency = ({ options }: Props) => {
  const context = useContext(CurrenciesContext);

  const handleChangeTo = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
      name: string;
    }>
  ) => {
    if (selectedOption) {
      const selected = { name: selectedOption.name, symbol: selectedOption.value };
      context?.dispatch({ type: "SELECTED_TO", payload: selected });
    }
  };

  const handleChangeFrom = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
      name: string;
    }>
  ) => {
    if (selectedOption) {
      const selected = { name: selectedOption.name, symbol: selectedOption.value };
      context?.dispatch({ type: "SELECTED_FROM", payload: selected });
    }
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.dispatch({ type: "AMOUNT", payload: Number(e.target.value) });
  };

  return (
    <Flex gap="20px" flexDir={{ base: "column", lg: "row" }}>
      <FormControl isRequired>
        <FormLabel>Amount</FormLabel>
        <CustomInput value={context?.amount || 0} onChange={handleChangeAmount} />
      </FormControl>

      <FormControl>
        <FormLabel>From</FormLabel>
        <Select onChange={handleChangeFrom} isSearchable options={options as SelectType[]} />
      </FormControl>

      <FormControl>
        <FormLabel>To</FormLabel>
        <Select onChange={handleChangeTo} isSearchable options={options as SelectType[]} />
      </FormControl>
    </Flex>
  );
};

export default ConvertCurrency;

const CustomInput = styled(Input).attrs({
  borderColor: "rgb(204, 204, 204)",
  type: "text",
  size: "lg",
  fontSize: "16px",
})``;
