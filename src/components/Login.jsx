
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLoginMutation } from './redux/userapislice';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [login, { isLoading, isError, error }] = useLoginMutation(); // <-- use RTK Query mutation

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(formData).unwrap(); // unwrap to catch error properly
//      let token= res.logintoken
     
//       localStorage.setItem("user",JSON.stringify(res))

//       localStorage.setItem("auth token",token)

//       if(formData.email=="admin@gmail.com" && formData.password=="Admin@2122"){
//         navigate("/admin");

//       }else{
//         navigate("/");

//       }
      


//     } catch (err) {
//       console.error('Login failed:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </button>
//           </div>
//         </form>
//         {isError && (
//           <p className="mt-4 text-center text-sm text-red-500">
//             {error?.data?.message || 'Login failed. Please try again.'}
//           </p>
//         )}
//         <p className="mt-6 text-center text-sm text-gray-500">
//           Don't have an account?{' '}
//           <a href="/signup" className="text-blue-600 hover:text-blue-500">
//             Register here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
