import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [section, setSection] = useState('mydetails');

  return (
    <div className="App">
      <Sidebar setSection={setSection} />
      <MainContent section={section} />
    </div>
  );
}

function Sidebar({ setSection }) {
  return (
    <div className="sidebar">
      <SidebarCard title="My Details" onClick={() => setSection('mydetails')} />
      <SidebarCard title="Designation" onClick={() => setSection('designation')} />
      <SidebarCard title="Exit Details" onClick={() => setSection('exitdetails')} />
      <SidebarCard title="Organization Chart" onClick={() => setSection('organizationchart')} />
    </div>
  );
}

function SidebarCard({ title, onClick }) {
  return (
    <div className="sidebar-card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
}

function MainContent({ section }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');

  const handlePasswordChange = () => {
    if (newPassword === reenterPassword) {
      console.log("Passwords match, proceed with API call");
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className="main-content">
      {section === "mydetails" && (
        <div className="card-container">
          {/* Profile Details Card */}
          <Card>
            <div className="profile-container">
              <div className="profile-header">
                <img src="https://via.placeholder.com/100" alt="Profile" />
                <p>Rokik Sri Gollandt</p>
              </div>
              <div className="profile-details">
                <div><strong>Email:</strong> rokiksigbajkhaqinya</div>
                <div><strong>Gender:</strong> Male</div>
                <div><strong>Birthdate:</strong> 21-01-1988</div>
              </div>
            </div>
          </Card>

          {/* Change Password Card */}
          <Card>
            <h3>Change Password</h3>
            <div className="form-group">
              <label>Old Password: </label>
              <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label>New Password: </label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Re-enter Password: </label>
              <input type="password" value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)} />
            </div>
            <button className="change-password-button" onClick={handlePasswordChange}>Change Password</button>
          </Card>

          {/* Contact Info Card */}
          <Card className="contact-info-card">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <div><strong>Address:</strong> Photo XYZ, APC Appointed City</div>
              <div><strong>Email:</strong> abc@gmail.com</div>
              <div><strong>Phone:</strong> 123-456-7890</div>
            </div>
          </Card>
        </div>
      )}
      {section === "designation" && (
        <Card>
          <div className="profile-container">
            <div className="profile-header">
              <img src="https://via.placeholder.com/100" alt="Profile" />
              <p>Rokik Sri Gollandt</p>
            </div>
            <div className="horizontal-card">
              <div><strong>EMP ID:</strong> 1241</div>
              <div><strong>First Name:</strong> Rokik Sri</div>
              <div><strong>Last Name:</strong> Gollandt</div>
              <div><strong>Start Date:</strong> 12 Nov 2024</div>
              <div><strong>Tenure:</strong> 18 months</div>
              <div><strong>Status:</strong> Active</div>
            </div>
          </div>
        </Card>
      )}
      {section === "exitdetails" && (
        <Card>
          <div className="profile-container">
            <div className="profile-header">
              <img src="https://via.placeholder.com/100" alt="Profile" />
              <p>Rokik Sri Gollandt</p>
            </div>
            <div className="horizontal-card">
              <div><strong>EMP ID:</strong> 1241</div>
              <div><strong>Name:</strong> Rokik Sri Gollandt</div>
              <div><strong>LWD:</strong> 12-11-2024</div>
              <div><strong>Exit Status:</strong> Yes</div>
              <div><strong>Reason:</strong> Holiday</div>
            </div>
          </div>
        </Card>
      )}
      {section === "organizationchart" && (
        <Card>
          <div className="company-chart">
            <h3>Organizational Chart</h3>
            <p>CEO</p>
            <div className="horizontal-card">
              <div>CTO</div>
              <div>COO</div>
              <div>CFO</div>
            </div>
            <div className="horizontal-card">
              <div>Engineering</div>
              <div>Operations</div>
              <div>Finance</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

function Card({ children, className }) {
  return (
    <div className={`card ${className || ''}`}>
      {children}
    </div>
  );
}

export default App;
