
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://hm-bay.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
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
