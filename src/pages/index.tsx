import { Button } from '@mui/material';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Integrate Material UI</h1>

      <Button variant="contained">Hello world</Button>
    </div>
  );
};

export default HomePage;
