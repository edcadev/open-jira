import type { FC, ReactNode } from 'react';
import Head from 'next/head';

import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Sidebar />

      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};

Layout.defaultProps = {
  title: 'Open Jira',
};
