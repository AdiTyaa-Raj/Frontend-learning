import * as React from 'react';
import {ArrowLeft20Filled} from "@fluentui/react-icons";
import './ConfigureTenant.css';

const users = [
  { key: '1', name: 'Adam Smith' },
  { key: '2', name: 'Adam Smith' },
  { key: '3', name: 'Adam Smith' },
  { key: '4', name: 'Adam Smith' },
  { key: '5', name: 'Adam Smith' },
];

const assets = [
  { key: '1', name: 'Revenue', role: 'None' },
  { key: '2', name: 'Revenue', role: 'None' },
  { key: '3', name: 'Revenue', role: 'None' },
  { key: '4', name: 'Revenue', role: 'None' },
  { key: '5', name: 'Revenue', role: 'None' },
];

const columns = [
  { key: 'column1', name: 'Asset Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column2', name: 'RLS Role', fieldName: 'role', minWidth: 100, maxWidth: 200, isResizable: true },
  {
    key: 'column3',
    name: 'Actions',
    minWidth: 50,
    maxWidth: 50,
  },
];

const ConfigureTenant = () => {
  return (
    <div className="container">
        <div className='container-header'>
            <div className='back-button'>
            <button className='header-back-button'>
                <ArrowLeft20Filled />
                Configure Tenant
            </button>
            </div>
            <div className='user-assets-button'>
                
            </div>
        </div>
        <div className='body'>
            <div className="usersSection">
                
            </div>
            <div className="assetsSection">
                
            </div>
        </div>
    </div>
  );
};

export default ConfigureTenant;