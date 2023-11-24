/* eslint-disable import/no-cycle */

import { useContext, useMemo } from 'react';
import type { DragEvent, FC } from 'react';
import type { EntryStatus } from '@/interfaces';

import { List, Paper } from '@mui/material';

import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
import { EntryCard } from '.';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => {
    return entries.filter((entry) => {
      return entry.status === status;
    });
  }, [entries, status]);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');

    const entry = entries.find((e) => e.id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
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
        <List sx={{ opacity: isDragging ? 0.4 : 1, transition: 'all 0.3s' }}>
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
