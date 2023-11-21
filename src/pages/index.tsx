import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout title="Open Jira">
      <Typography variant="h1" color="primary">
        Integrate Material UI
      </Typography>
    </Layout>
  );
};

export default HomePage;
