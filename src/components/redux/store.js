import { configureStore } from '@reduxjs/toolkit';
import { messagesApi } from './messagesapislice';
import { projectapi } from './projectapislice';


export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]:messagesApi.reducer,
    [projectapi.reducerPath]:projectapi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(messagesApi.middleware)
  .concat(projectapi.middleware)
})