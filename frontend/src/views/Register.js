import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Save user data to localStorage (simulating JSON file storage)
      const existingUsers = JSON.parse(localStorage.getItem('students')) || [];
      const newUser = {
        id: existingUsers.length + 1, // Automatically generate a new user ID
        ...formData,
        password: formData.password, // Save password (in a real-world app, do hashing here)
      };
      existingUsers.push(newUser);
      localStorage.setItem('students', JSON.stringify(existingUsers));

      // Show success message
      setMessage('Registration successful! You can now log in.');

      // Redirect to login page
      navigate('/login');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container" style={{ 
      background: 'url("https://d39l2hkdp2esp1.cloudfront.net/img/photo/180199/180199_00_2x.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      height : '90vh',
      paddingTop:'50px'
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
        }}>Register</h2>
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px' 
        }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />
          {errors.name && <div className="error" style={{ 
            color: 'red', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{errors.name}</div>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />
          {errors.email && <div className="error" style={{ 
            color: 'red', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{errors.email}</div>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />
          {errors.username && <div className="error" style={{ 
            color: 'red', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{errors.username}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />
          {errors.password && <div className="error" style={{ 
            color: 'red', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{errors.password}</div>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '16px' 
            }}
          />
          {errors.confirmPassword && <div className="error" style={{ 
            color: 'red', 
            marginTop: '10px', 
            fontSize: '14px', 
            fontWeight: 'bold' 
          }}>{errors.confirmPassword}</div>}

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
          }}>Register</button>

          <br/>
        </form>
      </div>
    </div>
  );
};

export default Register;
