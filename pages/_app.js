import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/fira-mono/400.css";
import "@fontsource/fira-mono/500.css";
import "@fontsource/fira-mono/700.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { VStack } from "@chakra-ui/react";
import { SWRConfig } from "swr";

import { Header, Footer } from "../shared/sections";
import { Analytics } from "../shared/components";
import theme from "../shared/theme";
import fetcher from "../shared/utils/fetcher";

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={extendedTheme}>
        <SWRConfig value={{ fetcher }}>
          <Header />
          <VStack as="main" flex={1} minHeight={"calc(100vh - 100px - 100px)"}>
            <Component {...pageProps} />
          </VStack>
          <Footer />
        </SWRConfig>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
