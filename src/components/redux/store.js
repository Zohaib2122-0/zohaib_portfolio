import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './userapislice';
import { appointmentApi } from './appointmentsapi';
import { doctorApi } from './doctortapi';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [appointmentApi.reducerPath]:appointmentApi.reducer,
    [doctorApi.reducerPath]:doctorApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
  .concat(appointmentApi.middleware)
  .concat(doctorApi.middleware)
});
