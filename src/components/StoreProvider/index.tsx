import React, {createContext} from 'react';
import {HomePageData} from '~/models';
import {dashboardReducer} from '~/store/dashBoard';
import {Action} from '~/store/type';

export type RootState = {
  dashBoard: HomePageData;
};

const initialState: RootState = {
  dashBoard: {
    banners: [],
    metricStats: {
      listedCount: 0,
      timeout: 0,
      tradedCount: 0,
      transactionRealValue: 0,
    },
    heroRecentlyLists: [],
  },
};
const rootReducer: React.Reducer<RootState, Action> = (
  state: RootState,
  action: Action,
) => ({
  dashBoard: dashboardReducer(state.dashBoard, action),
});

export const StoreContext = createContext<{
  state: RootState;
  dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => initialState});

type Props = {
  children?: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};
