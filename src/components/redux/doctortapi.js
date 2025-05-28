
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://faisal-hm.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const doctorApi = createApi({
    reducerPath: 'doctorApi',
    baseQuery,
    tagTypes: ['doctor'],
    endpoints: (builder) => ({



        registerdoctor: builder.mutation({
            query: (id) => ({
                method: "put",
                url: `/register/doctor/${id}`
            }),
            invalidatesTags: ["doctor"]
        }),

        registereddoctors: builder.query({
            query: () => "/registered/doctor",
            providesTags: ["doctor"]

        }),

        removedoctor: builder.mutation({
            query: (id) => ({
                method: "Delete",
                url: `/removedoctor/${id}`
            }),
            invalidatesTags: ["doctor"]
        })

    }),
});

export const {
    useRemovedoctorMutation, useRegisterdoctorMutation, useRegistereddoctorsQuery
} = doctorApi;
