/* eslint-disable import/no-cycle */

import { useReducer, type FC, type ReactNode, useMemo } from 'react';

import type { Entry } from '@/interfaces';
import type { ContextProps } from '.';

import { EntriesContext, entriesReducer } from '.';

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children: ReactNode;
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      id: crypto.randomUUID(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] Entry-Updated', payload: entry });
  };

  const sideMenuOpen = useMemo((): ContextProps => {
    return { ...state, addNewEntry, updateEntry };
  }, [state]);

  return <EntriesContext.Provider value={sideMenuOpen}>{children}</EntriesContext.Provider>;
};
