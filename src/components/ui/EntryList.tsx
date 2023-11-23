/* eslint-disable import/no-cycle */

import { useContext, type FC, useMemo } from 'react';
import type { EntryStatus } from '@/interfaces';

import { List, Paper } from '@mui/material';

import { EntriesContext } from '@/context/entries';
import { EntryCard } from '.';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => {
    return entries.filter((entry) => {
      return entry.status === status;
    });
  }, [entries, status]);

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
          {entriesByStatus.map((entry) => {
            return (
              <EntryCard
                key={entry.id}
                entry={entry}
              />
            );
          })}
        </List>
      </Paper>
    </div>
  );
};
