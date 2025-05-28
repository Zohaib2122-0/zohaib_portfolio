import axios from "axios";


let axioinstance=axios.create({
    baseurl:"https://faisal-hm.vercel.app/api",
    
  
    withCredentials:true
})
export default axioinstance