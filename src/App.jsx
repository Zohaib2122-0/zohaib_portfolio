import React from 'react'
// import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
// import Login from './components/Login'
import { Createpatientformm } from './components/Createpatientformm'
import { Sendmesageform } from './components/Sendmesageform'
import Messages from './components/Messages'
import DoctorRegistrationForm from './components/DoctorRegistrationForm'
// import Doctors from './components/DoctorList'
import PatientList from './components/PatientList'
import { Swiper } from './components/Swiper'
import { Createappointmentform } from './components/Createappointmentform'
import { Appointmentlist } from './components/Appointmentlist'
import Adminpannel from './components/Adminpannel'
import Layout from './components/fontenedpages/Layout'
import Home from './components/fontenedpages/Home'
import Contact from './components/fontenedpages/Contact'
import { Approvedappointments } from './components/fontenedpages/Approvedappointments'
import { Doctors } from './components/fontenedpages/Doctors'
import { Registeredoctors } from './components/fontenedpages/Registereddoctors'
import { About } from './components/About'

const App = () => {
  return (
    <div>
   <Layout>
<Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/sendmessageform' element={<Sendmesageform/>}/>
        <Route path='/gettreatment' element={<Swiper/>}/>
        <Route path='/createappointment' element={<Createappointmentform/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctor/registeration' element={<DoctorRegistrationForm/>}/>
        <Route path='/Createpatientformm' element={<Createpatientformm/>}/>
        <Route path='/registered/doctor' element={<Registeredoctors/>}/>
        <Route path='/about' element={<About/>}/>






        <Route path='admin' element={<Adminpannel/>}>
      
        <Route index element={<Appointmentlist/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='approved/appointments' element={<Approvedappointments/>}/>
       <Route path='PatientList' element={<PatientList/>}/> 
        <Route path='messages' element={<Messages/>}/>
        <Route path='doctorlist' element={<Doctors/>}/> 
        <Route path='appointments' element={<Appointmentlist/>}/>
        
        </Route>




      </Routes>
        </Layout>
    </div>
  )
}

export default App