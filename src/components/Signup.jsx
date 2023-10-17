import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNUP } from "../store/actions/user";

function Signup() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("---useeffect data---", data);
    if (data?.signupStatus) {
      navigate("/login");
    }
  }, [data?.signupStatus]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(SIGNUP(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create an account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"
              required
              onChange={handleInputChange}
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
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Signup
            </button>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Already have an account?
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-blue-500 hover:underline"
            >
              LogIn
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
