import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Box {...boxProps}>
      <MainContainer children={children}></MainContainer>
    </Box>
  );
};

export default Main;

const MainContainer = styled(Box).attrs((props) => ({
  children: props.children,
  maxW: "1160px",
  m: "auto",
  minH: "100vh",
  display: "flex",
  alignItems: "center",
  px: "30px",
  py: "60px",
}))``;

const boxProps = {
  minH: "100vh",
  bgGradient: "linear-gradient(to-r, blue.500, blue.400, blue.500)",
};
