import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TenantsPage from './pages/TenantsPage';
import RolesPage from './pages/RolesPage';
import ConfigureTenant from './pages/ConfigureTenant';
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
                            <Route path="/" element={<TenantsPage />} />
                            <Route path="/roles" element={<RolesPage />} />
                            <Route path="/configure" element = {<ConfigureTenant />} />
                        </Routes>
                    </div> 
                </div>
            </div>
        </Router>
    );
}

export default App;
