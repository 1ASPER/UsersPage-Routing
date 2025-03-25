import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-yellow-900 text-white p-6">
        
      <nav className="container mx-auto flex justify-center items-center">
        <div>
          <Link to="/users">User List</Link>
        </div>
        
      </nav>
    </header>
  );
}


export default Header;