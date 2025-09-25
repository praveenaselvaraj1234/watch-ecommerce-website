import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowUp } from 'react-icons/fa';
import '../App.css';

const API_BASE_URL = 'https://681da16cf74de1d219b06871.mockapi.io/api/todo';

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/User`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to load user data');
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/User/${id}`);
      setUsers(prev => prev.filter(user => user.id !== id));
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  }; 


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="user-details-container">
      {/* Back to Admin button at top */}
      <button 
        className="navigation-button back-button"
        onClick={() => navigate('/admin')}
      >
        <FaArrowLeft /> Back to Page
      </button>

      <h2>User Details</h2>

      <table className="plain-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
      <button 
        className="navigation-button top-button"
        onClick={scrollToTop}
      >
        <FaArrowUp /> Back to Top
      </button>
    </div>
  );
}