import React, { useState } from 'react';
import { authaxios } from './authaxios/auth/authaxios';
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function Register({ onRegister }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passkey: ''
  });

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (role === 'admin' && form.passkey !== 'adminadmin') {
      alert('Invalid passkey!');
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      alert('Only Gmail addresses are allowed');
      return;
    }

    try {
      const res = await authaxios.get('/User');
      const users = res.data || [];
      // some is used for cheking the duplicates
      if (users.some(u => u.email === form.email)) {
        alert('Email already registered. Please use different email.');
        return;
      }

      await authaxios.post('/User', { 
        name: form.name, 
        email: form.email, 
        password: form.password, 
        role 
      });
      alert('Registered! Please log in.');

      onRegister(role);
      navigate('/login');

    } catch (err) {
      console.error('Registration failed:', err.response?.data || err.message);
      alert('Registration failed. See console.');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
      <h2>REGISTER</h2>

      <div className="radio-button-1">
        <label>
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === 'user'}
            onChange={() => setRole('user')}
          /> User
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === 'admin'}
            onChange={() => setRole('admin')}
          /> Admin
        </label>
      </div>

      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        autoComplete="new-password"
      />

      {role === 'admin' && (
        <input
          name="passkey"
          type="password"
          placeholder="Admin Passkey"
          value={form.passkey}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      )}

      <button type="submit">Register</button>
      
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  );
}