import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './service/api';
import authReducer from './slice/auth.slice';
import studentReducer from './slice/student.slice';
import utilsReducer from './slice/utils.slice';
import pillReducer from './slice/pill.slice';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  utils: utilsReducer,
  student: studentReducer,
  pill: pillReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const RESET_ALL_STATES = 'store/reset';

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_ALL_STATES) {
    // Reset all slices to their initial state
    state = undefined;
    SecureStore.deleteItemAsync('token');
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});

// This action will reset all redux state.
export const resetAllStates = () => ({ type: RESET_ALL_STATES });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
