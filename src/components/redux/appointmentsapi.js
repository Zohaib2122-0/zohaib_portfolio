
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery: fetchBaseQuery({ 

  
//   baseUrl: 'http://localhost:3000/api/' 



// });

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? "https://faisal-hm.vercel.app/api/"
      : "/api",
  credentials: "include",
});

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery,
  tagTypes: ['Appointment'],
  endpoints: (builder) => ({


    //  Approve Appointment
    approveAppointment: builder.mutation({
      query: (id) => ({
        url: `/approve/appointment/${id}`, // 👈 Perfect
        method: "put"
      }),
      invalidatesTags: ['Appointment'],
    }),

  approvedappointments: builder.query({
      query: () => "/approved/appointment",
      providesTags: ["Appointment"], // Changed from invalidatesTags to providesTags
    }),


    rejectappointment: builder.mutation({
      query: (id) => ({
        url: `/reject/appointment/${id}`,
        method:'Delete'
      }),
      invalidatesTags: ['Appointment'],
    })

  }),
});

export const {

  useApproveAppointmentMutation,
useRejectappointmentMutation,
useApprovedappointmentsQuery
} = appointmentApi;
