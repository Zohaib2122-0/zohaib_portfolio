
import { create } from "zustand";
import axioinstance from "../axios";
import axios from "axios";
// import axios from "axios";

export let usedoctorstore=create((set)=>({
    Doctors:[],
    loading:false,


adddoctor:async(data)=>{
    set({loading:true})
    try {
        let{ name,
            specialization,
            consultationFees,
            email,
         status,
            role}=data
        // let response =await axios.post("https://faisal-hm.vercel.app/api/adddoctor",{ name,
        //     specialization,
        //     consultationFees,
        //     email,
        //      status,
        //     role
        //     })


                const baseURL =
                                        typeof window !== "undefined" && window.location.hostname === "localhost"
                                            ? "http://localhost:3000"
                                            : "https://faisal-hm.vercel.app";
                            
                                    const response = await axios.post(`${baseURL}/api/adddoctor`,{ name,
            specialization,
            consultationFees,
            email,
             status,
            role
            });

        set((state)=>({
            Doctors:[...state.Doctors, response.data]
        }))
    } catch (error) {
        console.log(error)
    }
},

getdoctor:async()=>{
    set({loading:true})
    try {

    //   let response=await axioinstance.get("https://faisal-hm.vercel.app/api/getdoctor")

      
               const baseURL =
                  typeof window !== "undefined" && window.location.hostname === "localhost"
                      ? "http://localhost:3000"
                      : "https://faisal-hm.vercel.app";
      
              const response = await axioinstance.get(`${baseURL}/api/getdoctor`);

      set({Doctors:response.data.getdoctor, loading:false})  
        console.log(response.data.getdoctor)
    } catch (error) {
        console.log(error)
    }
}



}))