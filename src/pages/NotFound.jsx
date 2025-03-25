import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-4">Page not found:(</p>

      <Link to="/users" className="mt-4 text-blue-500 hover:underline">Return to the home page</Link>
    </div>
  );
}

export default NotFound;