import type { Entry } from '@/interfaces';
import type { EntriesState } from '.';

type EntriesActionType =
  | {
      type: '[Entry] Add-Entry';
      payload: Entry;
    }
  | {
      type: '[Entry] Entry-Updated';
      payload: Entry;
    };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case '[Entry] Entry-Updated':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            const updatedEntry = {
              ...entry,
              status: action.payload.status,
              description: action.payload.description,
            };
            return updatedEntry;
          }

          return entry;
        }),
      };

    default:
      return state;
  }
};
