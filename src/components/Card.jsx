import React from 'react';
import { Link } from 'react-router-dom';

function Card({ user }) {
  return (
    <div className="p-6 hover:scale-107 transition-all duration-200 ease-in-out transform border rounded shadow-lg hover:shadow-xl">

      <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="Аватар" className="rounded-full w-24 h-24 mx-auto mb-4" />
      <h2 className="text-lg font-semibold">{user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1)}{' '} {user.name.lastname.charAt(0).toUpperCase() + user.name.lastname.slice(1)}</h2>
      <p className="text-sm text-black-600">Email: {user.email}</p>
      <p className="text-sm text-black-600">Address: {user.address.city}, {user.address.street}</p>

      <Link to={`/users/${user.id}`} className="mt-2 text-blue-500 hover:underline">Read more</Link>
    </div>
  );
}

export default Card;