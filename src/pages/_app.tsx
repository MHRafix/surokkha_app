import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#000",
    800: "#000",
    700: "#000",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
