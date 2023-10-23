import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/actions/user";
import { useNavigate } from "react-router-dom";
import { BUTTONDISABLE, LOADER } from "../store/reducers/user";

function Login() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data?.loginStatus) {
      navigate("/");
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LOGIN(formData));
    dispatch(LOADER());
    dispatch(BUTTONDISABLE());
    if (data?.user?.loginStatus) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Log In to account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <button
              disabled={data?.buttonDisable}
              type="submit"
              className="w-full bg-sky-500 text-white p-2 rounded hover:bg-sky-400 focus:outline-none"
            >
              Login &nbsp;
              {data?.authButtonLoader && (
                <FontAwesomeIcon icon={faSpinner} spin />
              )}
            </button>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Not have an account? &nbsp;
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="text-blue-500 hover:underline"
            >
              Signup
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
