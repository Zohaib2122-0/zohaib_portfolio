
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://hm-bay.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const projectapi = createApi({
  reducerPath: 'projectapi',
  baseQuery,
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
