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
  px: { base: "0px", sm: "15px", md: "30px" },
  py: { base: "0px", sm: "60px" },
}))``;

const boxProps = {
  minH: "100vh",
  bgGradient: "linear-gradient(to-r, #111, #222, #111)",
};
