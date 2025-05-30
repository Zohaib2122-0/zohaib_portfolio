import { configureStore } from '@reduxjs/toolkit';
import { appointmentApi } from './appointmentsapi';
import { doctorApi } from './doctortapi';


export const store = configureStore({
  reducer: {
    [appointmentApi.reducerPath]:appointmentApi.reducer,
    [doctorApi.reducerPath]:doctorApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(appointmentApi.middleware)
  .concat(doctorApi.middleware)
});
