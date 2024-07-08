import React, { useState } from 'react';
import { TextField } from '@fluentui/react';
import { ArrowLeft20Filled, Add20Filled, Delete20Regular, Search20Filled, Edit20Regular } from "@fluentui/react-icons";
import { Modal, mergeStyleSets, getTheme, FontWeights } from '@fluentui/react';
import './ConfigureTenant.css';
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
} from "@fluentui/react-components";

const user_columns = [
  { label: "Users" },
  { label: "Remove" },
];

const users = [
  { key: '1', name: 'Adam Smith' },
  { key: '2', name: 'Eve' },
  { key: '3', name: 'Hehe Hehe' },
  { key: '4', name: 'cool dude' },
  { key: '5', name: 'Revenue name' },
  { key: '6', name: 'User name' },
  { key: '7', name: 'named person' },
  { key: '8', name: 'Adam Smith' },
  { key: '9', name: 'Adam Smith' },
  { key: '10', name: 'Adam Smith' },
];

const assets = [
  { key: '1', name: 'Revenue', role: 'None' },
  { key: '2', name: 'AllRev', role: 'None' },
  { key: '3', name: 'Capital', role: 'None' },
  { key: '4', name: 'Total', role: 'None' },
  { key: '5', name: 'Revenue', role: 'None' },
];

const assets_columns = [
  { key: 'column1', name: 'Asset Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column2', name: 'Role', fieldName: 'role', minWidth: 100, maxWidth: 200, isResizable: true },
  {
    key: 'column3',
    name: 'Actions',
    minWidth: 50,
    maxWidth: 50,
  },
];

const ConfigureTenant = () => {

  const [activeTab, setActiveTab] = useState('user');

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };
  const [searchTermUsers, setSearchTermUsers] = useState('');
  const [searchTermAsset, setSearchTermAsset] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChangeUsers = (event) => {
    setSearchTermUsers(event.target.value);
  };

  const filteredUsers = users.filter(item =>
    item.name.toLowerCase().includes(searchTermUsers.toLowerCase())
  );

  const handleSearchChangeAsset = (event) => {
    setSearchTermAsset(event.target.value);
  };

  const filteredAsset = assets.filter(item =>
    item.name.toLowerCase().includes(searchTermAsset.toLowerCase())
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalStyles = mergeStyleSets({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30%', // Adjusted to 30% as requested
    },
    content: {
      width: '40%', // Adjusted to 40% as requested
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 4,
      boxShadow: getTheme().effects.elevation64,
    },
    header: {
      fontWeight: FontWeights.semibold,
      fontSize: 20,
      marginBottom: 20,
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 20,
    },
    button: {
      marginLeft: 10,
    },
  });

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
          <button className={`tab-button ${activeTab === 'user' ? 'active' : ''}`} onClick={() => handleButtonClick('user')} id="userButton">User</button>
          <button className={`tab-button ${activeTab === 'assets' ? 'active' : ''}`} onClick={() => handleButtonClick('assets')} id="assetsButton">Assets</button>
        </div>
      </div>
      <div className='body-section'>
        <div className="usersSection">
          <TextField
            className="search-bar"
            placeholder="Search Users"
            value={searchTermUsers}
            onChange={handleSearchChangeUsers}
            onRenderPrefix={() => <Search20Filled className="search-icon" />}
            styles={{ prefix: { marginRight: '0px', paddingRight: '0px', background: 'white' } }}
          />
          <button className="add-button" onClick={handleOpenModal}>
            <Add20Filled />
            Add
          </button>
          <Table id="user-configure-table">
            <TableHeader>
              <TableRow className="user-configure-table-header" style={{ textAlign: 'center' }}>
                {user_columns.map((column) => (
                  <TableHeaderCell>
                    <div>
                      {column.label}
                    </div>
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((item, index) => (
                <TableRow className='user-item'>
                  <TableCell>{item.name}</TableCell>
                  <TableCell><Delete20Regular className='delete-icon' /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>
        <div className="assetsSection">
          <div className="assets-header">
            <div className='header-section'>
              <div className='asset-heading'><h2>Assets (User: Shivam Tiwari)</h2></div>
              <div className="assets-search-bar">
                <TextField
                  placeholder="Search by Assets Name"
                  value={searchTermAsset}
                  onChange={handleSearchChangeAsset}
                  onRenderPrefix={() => <Search20Filled className="search-icon" />}
                  styles={{ prefix: { marginRight: '0px', paddingRight: '0px', background: 'white' } }}
                />
              </div>
            </div>
            <div className='assets-subheading'>
            <div className="tenant-access-wrapper">  
              <div><h2>Tenant Access</h2></div>  
              <div>  
                <select className="tenant-access-dropdown">  
                  <option>Contributor</option>  
                  <option>Exporter</option>  
                  <option>NewRole</option>  
                  <option>Owner</option>  
                  <option>Viewer</option>  
                </select>  
              </div>  
            </div> 
            </div>
          </div>
          <div className="assets-list">
            <Table id="asset-configure-table">
              <TableHeader>
                <TableRow id="asset-configure-table-header">
                  {assets_columns.map((column) => (
                    <TableHeaderCell>
                      <div>
                        {column.name}
                      </div>
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAsset.map((item, index) => (
                  <TableRow className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>
                      <Edit20Regular />
                      <Delete20Regular />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onDismiss={handleCloseModal}
        isBlocking={false}
        containerClassName={modalStyles.container}
      >
        <div className={modalStyles.content}>
          <div className={modalStyles.header}>Configure User Assets</div>
          <div>
            <TextField
              label="Shivam Tiwari | MAQ Software"
              readOnly
              value="Shivam Tiwari | MAQ Software"
              styles={{ root: { marginBottom: 20 } }}
            />
            <div className={modalStyles.row}>

            <select className="tenant-access-dropdown">
                  <option>Contributor</option>
                  <option>Exporter</option>
                  <option>NewRole</option>
                  <option>Owner</option>
                  <option>Viewer</option>
                </select>
              <TextField label="Role" placeholder="Select Role" />
            </div>
          </div>
          <div className={modalStyles.footer}>
            <button className="configure-button" onClick={handleCloseModal}>Configure</button>
            <button className="cancel-button" onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfigureTenant;
