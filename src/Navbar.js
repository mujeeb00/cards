import React from 'react';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Default Title',
};

export default Navbar;
