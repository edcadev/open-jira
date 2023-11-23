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
  entries: [
    {
      id: crypto.randomUUID(),
      description: 'Pendiente: In tempor cupidatat adipisicing Lorem cupidatat ex.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      id: crypto.randomUUID(),
      description: 'En-Progreso: Magna pariatur culpa et in elit irure ad aliquip nulla.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      id: crypto.randomUUID(),
      description: 'Terminadas: Excepteur exercitation quis consequat quis non nulla incididunt esse.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
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

  const sideMenuOpen = useMemo((): ContextProps => {
    return { ...state, addNewEntry };
  }, [state]);

  return <EntriesContext.Provider value={sideMenuOpen}>{children}</EntriesContext.Provider>;
};
