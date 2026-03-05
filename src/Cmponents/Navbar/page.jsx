import React, { useState } from "react";
import { LogOut, LogIn, User, Search, X } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ setCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const totalQty = useSelector((state) => state.cart.totalQty);
  const isLogin = localStorage.getItem("isLogin")
  return (
    <>
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 gradient-top-bottom-border relative">
          <div className="flex h-16 items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold shadow-lg">
                L
              </div>
              <span className="text-yellow-400 font-semibold tracking-widest text-[19px]">
                LUXE<span className="text-white">STORE</span>
              </span>
            </div>

            {/* NAV LINKS */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[15px] font-bold transition
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400
                    after:transition-all after:duration-300
                    ${isActive
                      ? "text-yellow-400 after:w-full"
                      : "text-white after:w-0 hover:text-yellow-400 hover:after:w-full"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-6 relative">

              {/* SEARCH */}
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setMenuOpen(false);
                }}
                className="text-white hover:text-yellow-300 transition"
              >
                <Search size={22} />
              </button>

              {/* CART */}
              <button
                onClick={() => navigate("/cart")}
                className="relative text-white hover:text-yellow-300 transition"
              >
                <FaShoppingCart size={22} />
                {totalQty > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                    {totalQty}
                  </span>
                )}
              </button>

              {/* LOGIN BUTTON (NEW) */}
              <button
                onClick={() => navigate("/login")}
                className="relative group px-6 py-2 rounded-full border-2 border-yellow-400 overflow-hidden text-white font-semibold"
              >
                <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  <LogIn size={18} />
                  Login
                </span>
              </button>




              {/* USER AVATAR */}
              <button
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setSearchOpen(false);
                }}
                className="h-10 w-10 rounded-full border-2 border-yellow-400 overflow-hidden shadow-lg relative z-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="user"
                  className="h-full w-full object-cover"
                />
              </button>



              {/* PROFILE MENU */}
              {menuOpen && (
                <div className="absolute top-16 right-0 w-56 bg-black/50 backdrop-blur-2xl border border-yellow-400/40 rounded-[5px] shadow-2xl z-50 overflow-hidden">
                  <ul className="flex flex-col p-3 gap-1">

                    {/* MY ACCOUNT */}
                    <li className="px-2">
                      <NavLink
                        to="/account"
                        className="group relative flex items-center px-4 py-2 rounded-[2px] overflow-hidden text-white font-semibold"
                      >
                        <span className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-out" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                          My Account
                        </span>
                      </NavLink>
                    </li>

                    {/* SETTINGS */}
                    <li className="px-2">
                      <NavLink
                        to="/settings"
                        className="group relative flex items-center px-4 py-2 rounded-[2px] overflow-hidden text-white font-semibold"
                      >
                        <span className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-out" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                          Settings
                        </span>
                      </NavLink>
                    </li>

                    {/* LOGOUT */}
                    <li className="px-2">
                      <NavLink
                        to={"/"}
                        className="group relative flex w-full items-center gap-2 px-4 py-2 rounded-[2px] overflow-hidden text-white font-semibold"
                      >
                        <span className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-out" />
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                          <LogOut size={18} />
                          Logout
                        </span>
                      </NavLink>
                    </li>

                  </ul>
                </div>
              )}


            </div>
          </div>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div
        className={`fixed top-16 left-0 w-full z-40 transition-all duration-500
          ${searchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}
        `}
      >
        <div className="h-16 bg-black/30 backdrop-blur-xl border-b border-yellow-400/30 flex items-center justify-center px-6">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full max-w-2xl h-10 bg-black/50 border-b-2 border-yellow-400/40 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
