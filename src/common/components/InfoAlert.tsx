import { Alert, AlertIcon, AlertDescription, Link } from "@chakra-ui/react";

const InfoAlert = () => {
  return (
    <Alert {...alertProps}>
      <AlertIcon />
      <AlertDescription {...alertDescriptionProps}>
        This project uses the currency API to fetch the number of available currencies and foreign
        exchange rates. Learn more about it <Link {...linkProps}>here.</Link>
      </AlertDescription>
    </Alert>
  );
};

export default InfoAlert;

const alertProps = {
  status: "info" as "info",
  bg: "blue.50",
  w: { base: "100%", lg: "50%" },
  alignItems: "flex-start",
  borderRadius: "3px",
  display: { base: "none", sm: "flex" },
};

const alertDescriptionProps = {
  fontSize: "13px",
  lineHeight: "1.3em",
  color: "gray.600",
};

const linkProps = {
  _focus: { boxShadow: "unset" },
  color: "blue.500",
  href: "https://github.com/fawazahmed0/currency-api#readme",
  isExternal: true,
};
