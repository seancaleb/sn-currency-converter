import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// CHAKRA SETUP
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// REACT QUERY SETUP
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// CURRENCIES CONTEXT
import { CurrencyProvider } from "./common/components/CurrenciesProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
