/* eslint-disable import/no-cycle */

import { useReducer, type FC, type ReactNode, useMemo, useEffect } from 'react';

import type { Entry } from '@/interfaces';
import { entriesAPI } from '@/api';
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

  const addNewEntry = async (description: string) => {
    const { data } = await entriesAPI.post<Entry>('/entries', { description });

    dispatch({ type: '[Entry] Add-Entry', payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesAPI.put<Entry>(`/entries/${_id} `, { description, status });

      dispatch({ type: '[Entry] Entry-Updated', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesAPI.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] Refresh-Data', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const sideMenuOpen = useMemo((): ContextProps => {
    return { ...state, addNewEntry, updateEntry };
  }, [state]);

  return <EntriesContext.Provider value={sideMenuOpen}>{children}</EntriesContext.Provider>;
};
