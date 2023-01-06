import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="form-container">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Login"
            name="imie"
          />
        </div>
        <div>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            name="email"
          />
        </div>

        <button
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="zatwierdz"
          value="zatwierdzenie"
        >
          <Link to="/Game">Log in</Link>
        </button>
        <button
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="zatwierdz"
          value="zatwierdzenie"
        >
          <Link to="/SignIn">Sign in</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
