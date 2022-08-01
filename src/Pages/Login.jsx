import { Alert, AlertTitle } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import GoogleIcon from '@mui/icons-material/Google';

const Login = (props) => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const {loginWithGoogle, error, resetPassword, login} = useAuth()
  const handleOnChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleResetPassword = () => {
    resetPassword()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user.email, user.password)
  }
  return (
    <div className="w-full max-w-xs m-auto h-full mt-6">
      {error.loginError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.loginError}
        </Alert>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign in
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
      <button
        onClick={loginWithGoogle}
        className=" hover:bg-red-800 text-white shadow rounded border-2 text-center py-2 px-4 w-full bg-red-600"
      >
        <GoogleIcon className="mr-2" />
        Google login
      </button>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;