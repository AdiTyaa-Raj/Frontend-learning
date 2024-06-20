import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TenantsPage from './pages/TenantsPage';
import OnboardAdminPage from './pages/OnboardAdminPage';
import RolesPage from './pages/RolesPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className='main-body'>
                    <Sidebar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<h1>Welcome to SITERRA</h1>} />
                            <Route path="/tenants" element={<TenantsPage />} />
                            <Route path="/onboard-admin" element={<OnboardAdminPage />} />
                            <Route path="/roles" element={<RolesPage />} />
                        </Routes>
                    </div> 
                </div>
            </div>
        </Router>
    );
}

export default App;
