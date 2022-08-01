import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Register = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const {error, signup} = useAuth()

  const handleOnChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password)
  }
  return (
    <div className="w-full max-w-xs m-auto text-black">
      {/* {error.signupError && <Alert message={error.signupError} />} */}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;