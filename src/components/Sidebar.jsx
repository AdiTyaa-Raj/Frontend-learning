import React from 'react';  
import { NavLink } from 'react-router-dom';  
import roleIcon from '../assets/role.png';  
import OnboardAdminIcon from '../assets/OnboardAdmin.png';  
import TenantsIcon from '../assets/Tenants.png';  
import siterraIcon from '../assets/siterra.png';  
import AdminIcon from '../assets/Admin.png';  
import './Sidebar.css';  
  
const Sidebar = () => {  
    return (  
        <div className="sidebar">  
            <div className="menu">  
                <ul>  
                    <li>  
                        <div className="menu-item non-selectable">  
                            <div className="icon-container">  
                                <img src={AdminIcon} alt="Admin Icon" className="Admin-icon" />  
                            </div>  
                            <div>Admin</div>  
                        </div>  
                    </li>  
                    <li>  
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>  
                            <div className="icon-container">  
                                <img src={TenantsIcon} alt="Tenants Icon" className="Tenants-icon" />  
                            </div>  
                            <div className="text-container">Tenants</div>  
                        </NavLink>  
                    </li>  
                    <li>  
                        <NavLink to="/roles" className={({ isActive }) => isActive ? "active" : ""}>  
                            <div className="icon-container">  
                                <img src={roleIcon} alt="Role Icon" className="Role-icon" />  
                            </div>  
                            <div className="text-container">Roles</div>  
                        </NavLink>  
                    </li>  
                </ul>  
            </div>  
        </div>  
    );  
}  
  
export default Sidebar;  
