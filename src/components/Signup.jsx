

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useRegisterMutation } from './redux/userapislice';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user'
//   });

//   const navigate = useNavigate();
//   const [register, { isLoading, error }] = useRegisterMutation(); // ✅ RTK Mutation Hook

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await register(formData).unwrap(); // unwrap gives raw response
//       console.log('User registered successfully:', res);
//       navigate('/login');
//     } catch (err) {
//       console.error('Registration failed:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
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

//           {error && (
//             <p className="text-red-500 text-sm">{error?.data?.message || 'Registration failed'}</p>
//           )}

//           <div>
//             <button 
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Registering...' : 'Register'}
//             </button>
//           </div>
//         </form>
//         <p className="mt-6 text-center text-sm text-gray-500">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 hover:text-blue-500">
//             Sign in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
