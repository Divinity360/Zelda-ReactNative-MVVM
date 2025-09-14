import { configureStore } from '@reduxjs/toolkit';
import { zeldaApi } from '~/api/zeldaApi';

const store = configureStore({
  reducer: {
    [zeldaApi.reducerPath]: zeldaApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(zeldaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
