// import React, { useState } from "react";
// import { TEInput, TERipple } from "tw-elements-react";
// import { Input } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from 'axios';

// const Register = ( ) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (event) => {
//     setData({...data, [event.target.name]: event.target.value });
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/register", data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if(response.status === 200) {
//         navigate("/login");
//         toast.success('registeration successful')
//       }

//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   return (
//     <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-black px-5">
//       <div className={`xl:max-w-3xl bg-black w-full p-5 sm:p-10 rounded-md`}>
//         <h1
//           className={`text-center text-xl sm:text-3xl font-semibold bg-black`}
//         >
//           Register for account
//         </h1>
//         <div className="w-full mt-8">
//           <div className="flex flex-col max-w-xs gap-4 mx-auto sm:max-w-md md:max-w-lg">
//             <div className="flex flex-col gap-3 mb-4">
//               <label htmlFor="name" className="">
//                 Your Name
//               </label>
//               <input
//                 className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline bg-[#302E30] text-white focus:border-white`}
//                 type="text"
//                 name="name"
//                 value={data.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div className="flex flex-col gap-3 mb-4">
//               <label htmlFor="email" className="">
//                 Your Email
//               </label>
//               <input
//                 className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-[#302E30] text-white focus:border-white`}
//                 type="email"
//                 name="email"
//                 value={data.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="flex flex-col gap-3 mb-4">
//               <label htmlFor="password">Password</label>
//               <input
//                 className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-[#302E30] text-white focus:border-white`}
//                 type="password"
//                 name="password"
//                 value={data.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//               />
//             </div>
//             <button
//               className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
//               onClick={handleRegister}
//             >
//               <svg
//                 className="w-6 h-6 -ml-2"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                 <circle cx="8.5" cy="7" r="4" />
//                 <path d="M20 8v6M23 11h-6" />
//               </svg>
//               <span className="ml-3">Register</span>
//             </button>
//             <p className="mt-6 text-xs text-center text-gray-600">
//               Already have an account?{" "}
//               <a href="">
//                 <span className="text-[#E9522C] font-semibold" onClick={() => (navigate('/login'))}>Login</span>
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Register;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleRegister = async () => {
    if (!data.name || !data.email || !data.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/login");
        toast.success("Registration successful!");
      }
    } catch (error) {
      if (error.response) {
        toast.error("Registration failed: " + error.response.data.message);
      } else if (error.request) {
        toast.error("No response from server. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-black px-5">
      <div className="w-full p-5 bg-black rounded-md xl:max-w-3xl sm:p-10">
        <h1 className="text-xl font-semibold text-center bg-black sm:text-3xl">
          Register for account
        </h1>
        <div className="w-full mt-8">
          <div className="flex flex-col max-w-xs gap-4 mx-auto sm:max-w-md md:max-w-lg">
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="name">Your Name</label>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-[#302E30] text-white focus:border-white"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="email">Your Email</label>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-[#302E30] text-white focus:border-white"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-[#302E30] text-white focus:border-white"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              onClick={handleRegister}
            >
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Register</span>
            </button>
            <p className="mt-6 text-xs text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
