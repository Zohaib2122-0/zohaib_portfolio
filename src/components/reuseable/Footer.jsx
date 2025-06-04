// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     // <div className='border-1 border-red-600 bg-red-600'>

//       <div className="flex flex-col space-y-6 justify-center m-10 bg-[#1F1F1F]  rounded-2xl py-5">
// <div>

// </div>
//         <nav className="flex justify-center flex-wrap gap-4 text-gray-300 font-medium">
//           <Link to={"/"} className="hover:text-gray-400" >Home</Link>
//           <Link to={"/about"} className="hover:text-gray-400" >About</Link>
//           <Link to={"/services"} className="hover:text-gray-400" >Services</Link>
//           <Link to={"/portfolio"} className="hover:text-gray-400" >portfolio</Link>
//           <Link to={"/contact"} className="hover:text-gray-400" >Contact</Link>
//         </nav>
//         <div className="flex justify-center space-x-5">
//           <Link to={""} target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
//           </Link>
//           <Link to={""} target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
//           </Link>
//           <Link to={""} target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
//           </Link>
//           <Link to={""} target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
//           </Link>
//           <Link to={""} target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
//           </Link>
//         </div>
//         <p className="text-center text-gray-300 font-medium">© 2022 Company Ltd. All rights reservered.</p>

//       </div>

//     // </div>
//   )
// }

// export default Footer










import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (


    <div className="flex flex-col justify-center m-0 bg-darkbg p-5">
      <div className=' space-y-6 bg-[#1F1F1F] py-4  rounded-2xl'>


        <nav className="flex justify-center flex-wrap gap-4 text-gray-300 font-medium">
          <Link to={"/"} className="hover:text-gray-400" >Home</Link>
          <Link to={"/about"} className="hover:text-gray-400" >About</Link>
          <Link to={"/services"} className="hover:text-gray-400" >Services</Link>
          <Link to={"/portfolio"} className="hover:text-gray-400" >portfolio</Link>
          <Link to={"/contact"} className="hover:text-gray-400" >Contact</Link>
        </nav>
        <div className="flex justify-center space-x-5">
          <Link to={""} target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </Link>
        </div>
        <p className="text-center text-gray-300 font-medium">© 2022 Company Ltd. All rights reservered.</p>
      </div>
    </div>


  )
}

export default Footer