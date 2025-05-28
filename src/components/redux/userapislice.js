import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://faisal-hm.vercel.app/api/"
      : "/api",
  credentials: "include",
});


export const apiSlice = createApi({
    reducerPath: 'api', // required

    tagTypes: ["user"],
    baseQuery,
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (formdata) => ({
                url: '/registeruser',
                method: 'POST',
                body: formdata,
            }),
            invalidatesTags: ["user"]
        }),


        login: builder.mutation({
            query: (formdata) => ({
                url: "login",
                method: "post",
                body: formdata,
            }),
            invalidatesTags: ["user"]
        }),

        logout:builder.mutation({
            query: () => ({
                url: "/logout",
                method: "post"
            }),
            invalidatesTags: ["user"]
        })

    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = apiSlice;
