import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { FaUserCircle, FaEdit, FaChevronDown } from "react-icons/fa";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="toggle-btn-wrapper">
          <button 
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '‹' : '›'}
          </button>
        </div>
        
        <div className="menu-container">
          {sidebarOpen ? (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaUserCircle className="accordion-icon" />
                  <span>User Management</span>
                  <FaChevronDown className="accordion-arrow" />
                </Accordion.Header>
                <Accordion.Body>
                  <div 
                    className="menu-item" 
                    onClick={() => navigate('/admin/userdetails')}
                  >
                    View User Details
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <FaEdit className="accordion-icon" />
                  <span>Edit User</span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="menu-item">
                    Edit User Content
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <div className="icons-only">
              <div 
                className="icon-item" 
                onClick={() => navigate('/admin/userdetails')}
                title="User Details"
              >
                <FaUserCircle />
              </div>
              <div className="icon-item" title="Edit User">
                <FaEdit />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="main-content">
        <h2>Admin Dashboard</h2>
      </div>
    </div>
  );
}