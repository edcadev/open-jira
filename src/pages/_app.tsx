import '@/styles/globals.css';

import { Roboto } from 'next/font/google';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';

import { UIProvider } from '@/context/ui';
import { EntriesProvider } from '@/context/entries';

import { darkTheme } from '@/themes';

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

      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </>
  );
}
