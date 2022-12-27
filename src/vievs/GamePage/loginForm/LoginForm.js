import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="form-container">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="src/potwierdzenie.php"
        method="GET"
      >
        <div>
          <label for="nazwisko">Nazwisko</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Nazwisko"
            name="nazwisko"
          />
        </div>
        <div>
          <label for="imie">Imie</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Imie"
            name="imie"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>

        <button
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="zatwierdz"
          value="zatwierdzenie"
        >
          Zatwierdz
        </button>
      </form>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="POST"
        action="src/potwierdzeniePOST.php"
      >
        <div>
          <label for="nazwisko">Nazwisko</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nazwisko"
            name="nazwisko"
          />
        </div>
        <div>
          <label for="imie">Imie</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Imie"
            name="imie"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            name="email"
          />
        </div>

        <button
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="zatwierdz"
          value="zatwierdzenie"
        >
          Zatwierdz
        </button>
      </form>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="POST"
        action="src/ciasteczkoPOST.php"
      >
        <div>
          <label for="imie">Imie</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Imie"
            name="imie"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            name="zatwierdz"
            value="zatwierdzenie"
          >
            Zatwierdz
          </button>
        </div>
      </form>
      <Link to="/Game">Graj w gre</Link>
    </div>
  );
};

export default LoginForm;
