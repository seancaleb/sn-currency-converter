import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConvertedCurrency, Currency } from "../../../types";
import { CurrenciesContext } from "./CurrenciesProvider";

type Props = {
  convertedValue: ConvertedCurrency | undefined;
};

const ConvertedValue = ({ convertedValue }: Props) => {
  const context = useContext(CurrenciesContext);

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      flexDir="column"
      gap="10px"
      py="20px"
      justify="center"
    >
      <Heading letterSpacing="-.25px" size="md" color="gray.500" fontWeight="semibold">
        {context?.amount} {context?.selectedFrom?.name} = {""}
      </Heading>
      <Heading letterSpacing="-.75px" size="lg">
        {convertedValue &&
          (convertedValue.currency.value * (context?.amount as number)).toLocaleString()}{" "}
        {context?.selectedTo?.name}
      </Heading>
    </MotionFlex>
  );
};

export default ConvertedValue;

const MotionFlex = motion(Flex);
