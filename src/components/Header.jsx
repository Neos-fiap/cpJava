import React from 'react';

function Header({ titulo }) {
  return (
    <header className="w-full bg-blue-700 py-6 mb-8 shadow-lg rounded-b-xl">
      <h1 className="text-4xl text-white font-bold text-center drop-shadow">{titulo}</h1>
    </header>
  );
}

export default Header;