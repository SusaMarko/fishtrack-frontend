import React, { useState } from "react";

const FishTrackNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="space-y-4 ... menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                href="/FishingReportInput"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Dodaj izvestaj sa pecanja
              </a>
            </li>
            <li>
              <a
                href="/FishingReports"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Pregled svih izvestaja sa pecanja
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-6xl">FishTrack</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 ... menu menu-horizontal px-1">
          <li>
            <a
              href="/FishingReportInput"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Dodaj izvestaj sa pecanja
            </a>
          </li>

          <li>
            <a
              href="/FishingReports"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Pregled svih izvestaja sa pecanja
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FishTrackNavbar;

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const FishTrackNavbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="flex bg-gray-400 justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
//       <h1 className="w-full text-3xl font-bold text-[green]">FishTrack</h1>
//       <ul className="hidden md:flex">
//         <li>
//           <a
//             href="/FishingReportInput"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//           >
//             Dodaj izvestaj sa pecanja
//           </a>
//         </li>
//         <li>
//           <a
//             href="/FishingReports"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//           >
//             Pregled svih izvestaja sa pecanja
//           </a>
//         </li>
//       </ul>
//       <div onClick={handleNav} className="block md:hidden">
//         {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
//       <div
//         className={
//           !nav
//             ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-red-900 bg-blue-400 ease-in-out duration-500"
//             : "fixed left-[-100%]"
//         }
//       >
//         <h1 className="w-full text-4xl font-bold text-[green] m-4">
//           FishTrack
//         </h1>
//         <ul className="uppercase p-4">
//           <li>
//             <a
//               href="/FishingReportInput"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//             >
//               Dodaj izvestaj sa pecanja
//             </a>
//           </li>
//           <li>
//             <a
//               href="/FishingReports"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//             >
//               Pregled svih izvestaja sa pecanja
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FishTrackNavbar;
