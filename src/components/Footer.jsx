import React from 'react';

function Footer({ ano }) {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-10 text-center rounded-t-xl shadow-inner">
      <span className="text-gray-600 text-sm">
        2025 - todos dirietos reservados &copy; {ano}
      </span>
    </footer>
  );
}

export default Footer;