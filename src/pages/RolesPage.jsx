
import React from 'react';
import { Checkbox, IconButton } from '@fluentui/react';
import {  AcceptIcon, BlockedIcon } from '@fluentui/react-icons-mdl2';
import { NoteEdit20Regular, Dismiss20Filled, Delete20Regular, Add20Filled } from "@fluentui/react-icons";
import './Role.css';  

const roles = [
  { role: 'New Role', canView: true, canEdit: true, canExport: false, canCreate: false },
  { role: 'Contributor', canView: true, canEdit: true, canExport: true, canCreate: false },
  { role: 'Exporter', canView: true, canEdit: false, canExport: true, canCreate: false },
  { role: 'Owner', canView: true, canEdit: true, canExport: true, canCreate: true },
  { role: 'Viewer', canView: true, canEdit: false, canExport: true, canCreate: false },
];

const Role = () => {
  return (
    <div className='role-contents'>
        <div className='role-header'>
            <div><h1>Roles</h1></div>
            <button className='add-role-button'>  
                <Add20Filled className='add-icon' />  
                Add New Roles  
            </button>  
        </div>
        <table className="role-table">
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Can View</th>
                    <th>Can Edit</th>
                    <th>Can Export</th>
                    <th>Can Create</th>
                    <th>Edit Role</th>
                    <th>Delete Role</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td><div>{role.role}</div></td>
                        <td><div>{role.canView ? <AcceptIcon /> : <Dismiss20Filled className='cross-icon'/>}</div></td>
                        <td><div>{role.canEdit ? <AcceptIcon /> : <Dismiss20Filled className='cross-icon'/>}</div></td>
                        <td><div>{role.canExport ? <AcceptIcon /> : <Dismiss20Filled className='cross-icon'/>}</div></td>
                        <td><div>{role.canCreate ? <AcceptIcon /> : <Dismiss20Filled className='cross-icon'/>}</div></td>
                        <td><div><NoteEdit20Regular /></div></td>
                        <td><div><Delete20Regular /></div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Role;
