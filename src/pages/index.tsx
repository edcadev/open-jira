import type { NextPage } from 'next';

import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />

            <NewEntry />

            <CardContent>
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
        >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />

            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
        >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Terminados" />

            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
