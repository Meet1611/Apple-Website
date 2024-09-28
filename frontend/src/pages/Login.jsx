// import React, { useState } from "react";
// import { TEInput, TERipple } from "tw-elements-react";
// import { Input } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Register = ({ isLoggedIn, setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/login", data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         const data = response.data;
//         navigate('/home');
//         toast.success('Login Successful');
//         console.log("Login successful:", data);
//       }
//       else {
//         toast.error('')
//       }
//     } catch (error) {}
//   };

//   return (
//     <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-black px-5">
//       <div className={`xl:max-w-3xl bg-black w-full p-5 sm:p-10 rounded-md`}>
//         <h1
//           className={`text-center text-xl sm:text-3xl font-semibold bg-black`}
//         >
//           Log in to your account
//         </h1>
//         <div className="w-full mt-8">
//           <div className="flex flex-col max-w-xs gap-4 mx-auto sm:max-w-md md:max-w-lg">
//             <div className="flex flex-col gap-3 mb-4">
//               <label htmlFor="email" className="">
//                 Your Email
//               </label>
//               <input
//                 className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-[#302E30] text-white focus:border-white`}
//                 type="email"
//                 value={data.email}
//                 htmlFor="email"
//                 name="email"
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />

//               {/* <div className="w-72">
//                 <Input variant="standard" label="Standard" placeholder="Standard"/>
//               </div> */}
//               {/* <div class="relative">
//                 <input
//                   type="text"
//                   id="floating_outlined"
//                   class="block px-2.5 pb-2.5 pt-4 w-full text-sm dark:bg-[#302E30] text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                 />
//                 <label
//                   for="floating_outlined"
//                   class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:border-gray-600 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//                 >
//                   Floating outlined
//                 </label>
//               </div> */}
//             </div>
//             <div className="flex flex-col gap-3 mb-4">
//               <label htmlFor="password">Password</label>
//               <input
//                 className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-[#302E30] text-white focus:border-white`}
//                 type="password"
//                 value={data.password}
//                 name="password"
//                 onChange={handleChange}
//                 placeholder="Password"
//               />
//             </div>
//             <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
//               onClick=
//               {() => {
//                 handleLogin;
//               }}
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
//               <span className="ml-3">Login</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setIsLoggedIn(true); // Set user as logged in
        toast.success("Login Successful");
        navigate("/home");
        console.log("Login successful:", data);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-black px-5">
      <div className={`xl:max-w-3xl bg-black w-full p-5 sm:p-10 rounded-md`}>
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold bg-black`}
        >
          Log in to your account
        </h1>
        <div className="w-full mt-8">
          <div className="flex flex-col max-w-xs gap-4 mx-auto sm:max-w-md md:max-w-lg">
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="email">Your Email</label>
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-[#302E30] text-white focus:border-white`}
                type="email"
                value={data.email}
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="password">Password</label>
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-[#302E30] text-white focus:border-white`}
                type="password"
                value={data.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              onClick={() => handleLogin()} // Correct function call
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
              <span className="ml-3">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
