import { Roboto } from 'next/font/google';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';

import { darkTheme } from '@/themes';

import '@/styles/globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
