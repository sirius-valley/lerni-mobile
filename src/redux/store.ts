import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './service/api';
import authReducer from './slice/auth.slice';
import utilsReducer from './slice/utils.slice';
import pillsSlice from './slice/pills.slice';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  utils: utilsReducer,
  pills: pillsSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
