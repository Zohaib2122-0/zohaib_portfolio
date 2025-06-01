
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectapi = createApi({
  reducerPath: 'projectapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }), 
  tagTypes: ['Projects'],
  endpoints: (builder) => ({
    // 1. Send Message
    uploadproject: builder.mutation({
      query: (formdata) => ({
        url: '/project/send',
        method: 'POST',
        body: formdata,
      }),
      invalidatesTags: ['Projects'],
    }),

    // 2. Get Projects
    getprojects: builder.query({
      query: () => '/project/display',
      providesTags: ['Projects'],
    }),

    // 3. Delete Message
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/project/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Projects'],
    }),
  }),
});

export const {
    useDeleteMessageMutation,
    useGetprojectsQuery,
    useUploadprojectMutation
} = projectapi;
