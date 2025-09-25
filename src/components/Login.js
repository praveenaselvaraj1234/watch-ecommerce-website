import React, { useState } from 'react';
import { authaxios } from './authaxios/auth/authaxios';
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await authaxios.get('/User');
      const users = res.data || [];
      const user = users.find(
        u => u.email === form.email && u.password === form.password
      );

      if (!user) {
        alert('Invalid credentials!');
        return;
      }

      onLogin(user.role);
      
      setTimeout(() => {
        if (user.role === 'admin') {
          navigate('/admin', { replace: true });
        } else {
          navigate('/home', { replace: true });
        }
      }, 0);
      
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert('Login failed');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
      <h2>Login</h2>

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

      <button type="submit">Log In</button>
      
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </form>
  );
}