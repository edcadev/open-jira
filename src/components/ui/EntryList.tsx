/* eslint-disable import/no-cycle */

import { List, Paper } from '@mui/material';
import { EntryCard } from '.';

export const EntryList = () => {
  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          height: 'calc(100vh - 180px)',
          padding: '1px 5px',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          backgroundColor: 'transparent',
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
