import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Boardgames from "./pages/Boardgames";

export default function Layout() {
  const [settingsIsOpen, setsettingsIsOpen] = useState(false);

  const clickSettings = () => {
    setsettingsIsOpen(!settingsIsOpen);
  };

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">
            Bine ai venit în aplicația Games!
          </h1> */}
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                Icon when menu is closed.
    
                Menu open: "hidden", Menu closed: "block"
              --> */}
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
                Icon when menu is open.
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-11 w-auto"
                  src="images/9086413a443d6239301d96c45baf1215-removebg-preview.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/boardgames"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    Boardgames
                  </NavLink>

                  <NavLink
                    to="/consola"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    Consola
                  </NavLink>

                  <NavLink
                    to="/pcgames"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    PCGames
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Settings --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={clickSettings}
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="settings-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open settings menu</span>
                    <img
                      className="size-8 rounded-full"
                      src="images/settings-gear-cartoon-vector-icon-701751694973156nreo6wgpka-removebg-preview.png"
                      alt=""
                    />
                  </button>
                </div>

                {/* <!--
                Dropdown menu, show/hide based on menu state.
    
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                {settingsIsOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                    <Link
                      to="/settings" // Redirecționează la pagina de setări
                      className="block px-4 py-2 text-sm text-gray-700 font-bold"
                      id="settings-menu-button"
                      onClick={() => settingsIsOpen(false)}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open settings menu</span>
                      Settings
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Light/Dark Theme
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Font Theme
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/boardgames"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            >
              Boardgames
            </NavLink>
            <NavLink
              to="/consola"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            >
              Consola
            </NavLink>
            <NavLink
              to="/pcgames"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            >
              PCGames
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
