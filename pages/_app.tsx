import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import theme from '../public/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
