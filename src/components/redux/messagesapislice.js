
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }), 
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    // 1. Send Message
    sendMessage: builder.mutation({
      query: (formdata) => ({
        url: '/messages/send',
        method: 'POST',
        body: formdata,
      }),
      invalidatesTags: ['Messages'],
    }),

    // 2. Get Messages
    getMessages: builder.query({
      query: () => '/messages/display',
      providesTags: ['Messages'],
    }),

    // 3. Delete Message
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/messages/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMessagesQuery,
  useDeleteMessageMutation,
} = messagesApi;
