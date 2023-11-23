/* eslint-disable import/no-cycle */

import { useReducer, type FC, type ReactNode, useMemo } from 'react';

import type { ContextProps } from '.';
import { UIContext, uiReducer } from '.';

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
}

interface Props {
  children: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAddingEntry });
  };

  const sideMenuOpen = useMemo((): ContextProps => {
    return { ...state, openSideMenu, closeSideMenu, setIsAddingEntry };
  }, [state]);

  return <UIContext.Provider value={sideMenuOpen}>{children}</UIContext.Provider>;
};
