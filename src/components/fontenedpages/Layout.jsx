

import React from 'react';
import { Navv } from '../Navv';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


const Layout = ({ children }) => {

   const location = useLocation();

  // Un pages ke paths jahan Navv aur Footer nahi chahiye
  const noLayoutRoutes = ['/admin', '/admin/messages', '/admin/PatientList','/admin/doctorregisteration','/admin/appointments','/admin/doctorlist','/admin/approved',"/admin/approved/appointments"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);
  return (
    <div>
 {!hideLayout && <Navv/>}
      <main>
    
        {children}
        </main> 
    {!hideLayout && <Footer/>}
    </div>
  );
};

export default Layout;

