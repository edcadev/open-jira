import '@/styles/globals.css';

import { Roboto } from 'next/font/google';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';

import { darkTheme } from '@/themes';

import { UIProvider } from '@/context/ui';

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

      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </>
  );
}
