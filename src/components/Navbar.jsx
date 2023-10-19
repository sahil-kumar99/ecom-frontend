import { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { CARTSIZE, LOGOUT } from "../store/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const NavBar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {}, [userData]);
  useEffect(() => {
    dispatch(CARTSIZE());
  }, []);
  const handleShowWishlist = () => {};

  const handleLogout = () => {
    dispatch(LOGOUT());
    localStorage.removeItem("user");
    localStorage.removeItem("persist:user");
    toast.success("logout successfully");
    navigate("/login");
  };
  return (
    <nav className="w-full bg-sky-400 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <span href="/">
              <h2 className="text-2xl font-bold">Ecom</h2>
            </span>
            {userData?.loginStatus && (
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
        {userData?.loginStatus && (
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:text-blue-600">
                  <AiFillHome
                    size={25}
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </li>
                <li className="text-black hover:text-blue-600">
                  <BsFillCartFill
                    size={25}
                    onClick={() => {
                      navigate("/cart");
                    }}
                  />
                  <span className="badge font-extrabold">
                    {userData.cartSize}
                  </span>
                </li>

                <li
                  className="text-black hover:text-blue-600 relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <BiSolidUserCircle size={25} />
                  {showDropdown && (
                    <div
                      className="absolute right-0 w-25 bg-white border rounded shadow-lg"
                      style={{ zIndex: 100 }}
                    >
                      <ul>
                        {/* <li className="m-2">
                          <button onClick={handleShowWishlist}>profile</button>
                        </li> */}
                        <li className="m-2">
                          <button onClick={handleLogout}>Logout</button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
