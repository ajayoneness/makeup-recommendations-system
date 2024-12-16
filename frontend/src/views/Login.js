import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    // Retrieve students data from localStorage
    const users = JSON.parse(localStorage.getItem('students')) || [];
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      // Store logged-in user's data in sessionStorage
      sessionStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      setMessage(`Welcome, ${foundUser.name}!`);

      // Redirect to home page
      // navigate('/');
      window.location.href = '/'; 
    } else {
      setErrors('Invalid username or password.');
    }
  };

  return (
    <div className="form-container" style={{ 
     
      background: 'url("https://d39l2hkdp2esp1.cloudfront.net/img/photo/180199/180199_00_2x.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat:'no-repeat',
      height : '90vh',
      paddingTop:'100px'
    }}>
      <div style={{ 
        maxWidth: '400px', 
        margin: 'auto', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px rgba(0,0,0,0.1)', 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        border: '1px solid #ddd', 
       
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '20px', 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: 'white' 
        }}>Login</h2>
        <form onSubmit={handleLogin} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px' 
        }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />

          {errors && <div className="error" style={{ 
            color: 'red', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{errors}</div>}
          {message && <div className="success" style={{ 
            color: 'green', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{message}</div>}

          <button type="submit" style={{ 
            padding: '10px 20px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#C11C84', 
            color: 'white', 
            cursor: 'pointer', 
            fontSize: '16px', 
            fontWeight: 'bold' 
          }}>Login</button>

          <br/>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
