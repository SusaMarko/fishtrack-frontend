import React from "react";

const FishTrackNavbar = (props) => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
  };

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
                href="/input"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Dodaj izvestaj sa pecanja
              </a>
            </li>
            <li>
              <a
                href="/reports"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Pregled svih izvestaja sa pecanja
              </a>
            </li>

            <li>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={(e) => logout(e)}
              >
                Odjava
              </button>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-6xl">
          FishTrack
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 ... menu menu-horizontal px-1">
          <li>
            <a
              href="/input"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Dodaj izvestaj sa pecanja
            </a>
          </li>

          <li>
            <a
              href="/reports"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Pregled svih izvestaja sa pecanja
            </a>
          </li>

          <li>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={(e) => logout(e)}
            >
              Odjava
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FishTrackNavbar;
