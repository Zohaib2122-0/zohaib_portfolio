import { create } from "zustand";
// import axioinstance from "../axios";
import axios from "axios";

export let useappointmentstore=create((set)=>({
appointments:[],
loading:false,


createappointment:async(appointmentdata)=>{
    set({loading:true})
    try {
        // const response= await axios.post("https://faisal-hm.vercel.app/api/createappointment",appointmentdata)

        
         const baseURL =
            typeof window !== "undefined" && window.location.hostname === "localhost"
                ? "http://localhost:3000"
                : "https://faisal-hm.vercel.app";

        const response = await axios.post(`${baseURL}/api/createappointment`,appointmentdata);

        set((appointmentstate)=>({
            appointments:[...appointmentstate.appointments, response.data]
        }))
    } catch (error) {
        console.log(error)
    }
},

getappoinment:async()=>{
    set({loading:true})
    try {

        // let response=await axios.get("https://faisal-hm.vercel.app/api/getappointment")

         const baseURL =
            typeof window !== "undefined" && window.location.hostname === "localhost"
                ? "http://localhost:3000"
                : "https://faisal-hm.vercel.app";

        const response = await axios.get(`${baseURL}/api/getappointment`);


        set({appointments:response.data.getappointment, loading:false})
    } catch (error) {
        console.log(error)
    }
}

}))