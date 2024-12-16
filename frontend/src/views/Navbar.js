import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    // Clear session storage and redirect to login page
    sessionStorage.removeItem('loggedInUser');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <nav style={{ alignItems:'center',padding: '1px', paddingLeft:'50px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <ul style={{alignItems:'center', display: 'flex', listStyleType: 'none', gap: '30px' }}>

        <li><b style={{fontSize: '25px'}}><Link style={{color:"#C11C84",  textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease', ':hover': { color: '#E5A5C3' } }} to='/' >Match Your Makeup and Skin Care</Link></b></li>

        {user ? (
          <>
            <li style={{ color: '#333', fontWeight: 'bold' }}>Welcome, {user.name}</li>
            <li><button onClick={handleLogout} style={{ backgroundColor: '#C11C84', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s ease', ':hover': { backgroundColor: '#0056b3' } }}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease', ':hover': { color: '#0056b3' } }}>Login</Link></li>
            <li><Link to="/register" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease', ':hover': { color: '#0056b3' } }}>Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
