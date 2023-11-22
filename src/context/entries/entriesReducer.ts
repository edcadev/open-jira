import type { EntriesState } from '.';

type EntriesActionType = {
  type: '[Entries] - ActionName';
};

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    /*  case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      };

    case 'UI - Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false,
      }; */

    default:
      return state;
  }
};
