import React, { useState } from 'react';


function Details({ user }) {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="space-y-2 text-center p-4 rounded shadow-lg"> 
      <h2 className="text-2xl font-semibold">{user.name.firstname} {user.name.lastname}</h2>
      <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="Profile" className="rounded-full w-50 h-50 mx-auto mb-4" />
      <p><span className="font-semibold">Address:</span> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
      <p><span className="font-semibold">Phone Number:</span> {user.phone}</p>
      <p><span className="font-semibold">Location:</span> {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
      <p><span className="font-semibold">User name:</span> {user.username}</p>
      <p>
        <span className="font-semibold">Password:</span> {showPassword ? user.password : '********'}
        <button onClick={() => setShowPassword(!showPassword)} className="ml-2 text-blue-500 hover:underline">
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </p>
    </div>
  );
}

export default Details;