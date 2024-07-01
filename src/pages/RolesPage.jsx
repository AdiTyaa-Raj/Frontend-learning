import React from 'react';
import { Checkmark20Filled, Edit20Regular, Dismiss20Filled, Delete20Regular, Add20Filled } from "@fluentui/react-icons";
import './Role.css';
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
} from "@fluentui/react-components";  

const roles = [
  { role: 'New Role', canView: true, canEdit: true, canExport: false, canCreate: false },
  { role: 'Contributor', canView: true, canEdit: true, canExport: true, canCreate: false },
  { role: 'Exporter', canView: true, canEdit: false, canExport: true, canCreate: false },
  { role: 'Owner', canView: true, canEdit: true, canExport: true, canCreate: true },
  { role: 'Viewer', canView: true, canEdit: false, canExport: true, canCreate: false },
];

const columns = [  
    { columnKey: "role", label: "Role" },  
    { columnKey: "canView", label: "Can View" },  
    { columnKey: "canEdit", label: "Can Edit" },  
    { columnKey: "canExport", label: "Can Export" },  
    { columnKey: "canCreate", label: "Can Create" },  
    { columnKey: "editRole", label: "Edit Role" },  
    { columnKey: "deleteRole", label: "Delete Role" },  
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
        <Table id="role-table">
            <TableHeader>
                <TableRow id='role-table-header'>
                {columns.map((column) => (
                    <TableHeaderCell key={column.columnKey}>
                      <div className='role-table-elements' > {column.label} </div>
                    </TableHeaderCell>
                ))}
                </TableRow>
            </TableHeader>
            <TableBody id='role-table-body'>
                {roles.map((item, index) => (
                <TableRow className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <TableCell>
                      <div className='role-table-elements' > {item.role}</div>
                    </TableCell>
                    <TableCell>
                        <div className='role-table-elements' >{item.canView ? <Checkmark20Filled /> : <Dismiss20Filled className='cross-icon'/> }</div>
                    </TableCell>
                    <TableCell><div className='role-table-elements' >{item.canEdit ? <Checkmark20Filled /> : <Dismiss20Filled className='cross-icon'/> }</div></TableCell>
                    <TableCell><div className='role-table-elements' >{item.canExport ? <Checkmark20Filled /> : <Dismiss20Filled className='cross-icon'/> }</div></TableCell>  
                    <TableCell><div className='role-table-elements' >{item.canCreate ? <Checkmark20Filled /> : <Dismiss20Filled className='cross-icon'/> }</div></TableCell>  
                    <TableCell><div className='role-table-elements' ><Edit20Regular /></div></TableCell>  
                    <TableCell><div className='role-table-elements' ><Delete20Regular /></div></TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
};

export default Role;