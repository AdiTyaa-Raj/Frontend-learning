import React, { useState } from 'react';
import { TextField} from '@fluentui/react';
import './TenantsPage.css';
import Modal from './popup';
import { NoteEdit20Regular, Delete20Regular, ArrowClockwise20Regular, Search20Filled  } from "@fluentui/react-icons";

const tenantsData = [
    { name: 'Eve', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'Adam Smith', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'Hue Hue', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'Adam Smith', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'okei', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'Adam Smith', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'Adam Smith', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
    { name: 'Adam Smith', link: 'https://app.powerbi.com/', capacity: 'Adam Smith' },
];

const Tenant = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);  
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const openModal = () => {  
        setIsModalOpen(true);  
    };  

    const closeModal = () => {  
        setIsModalOpen(false);  
    }; 

    const filteredTenants = tenantsData.filter(tenant =>
        tenant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="tenant-overview">
            <div className="header-row">  
                <h2>Tenant Overview</h2>  
                <TextField  
                    className="search-bar"  
                    placeholder="Search by Tenant Name"  
                    value={searchTerm}  
                    onChange={handleSearchChange}  
                    onRenderPrefix={() => <Search20Filled className="search-icon" />}  
                    styles={{ prefix: { marginRight: '0px', paddingRight:'0px', background: 'white'} }}
                />  
                <button className="onboard-tenants-button" onClick={openModal}>Onboard Tenants</button>  
            </div>  

            <table className="tenant-table">
                <thead>
                    <tr>
                        <th>Tenant Name</th>
                        <th>Tenant Link</th>
                        <th>Capacity Name</th>
                        <th>Actions</th>
                        <th>Refresh</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTenants.map((tenant, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td><div class="tenant-name">{tenant.name}</div></td>
                            <td><a class="tenant-link" href={tenant.link}>{tenant.link}</a></td>
                            <td><div class="tenant-capacity">{tenant.capacity}</div></td>
                            <td>
                                <NoteEdit20Regular />
                                <Delete20Regular />
                            </td>
                            <td>
                            <ArrowClockwise20Regular />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={isModalOpen} onClose={closeModal}>  
                <h2 class= "modal-heading">Import Tenant</h2>  
                <p>Import existing Power BI workspace as tenant. Please grant ‘Admin’ role to “PowerBIEmbedFast” service principal on Power BI workspaces</p>  
                <h4 class="modal-sub-heading">Select Power BI Workspace</h4>  
                <select defaultValue="" className="modal-dropdown">  
                    <option value="" disabled hidden>Select Power BI Workspace</option>  
                    <option>Accurent</option>  
                    <option>Demo Report</option>  
                    <option>Export</option>  
                    <option>123</option>  
                </select>  
                <div>
                    <h4 class="modal-sub-heading">Tenant Name</h4>
                    <input type="text" className="modal-tenant-name"/>
                </div>
                <div className="modal-buttons">  
                    <button class="modal-import-button">Import</button>  
                    <button class="modal-cancel-button" onClick={closeModal}>Cancel</button>  
                </div>  
            </Modal>  
        </div>
    );
};

export default Tenant;
