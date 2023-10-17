import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/actions/user";
import { useNavigate } from "react-router-dom";

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
    console.log("login data-----:", formData);
    dispatch(LOGIN(formData));
    if (data?.user?.loginStatus) {
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Log In to store
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
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Not have an account?
            <a href="/signup" className="text-blue-500 hover:underline">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
