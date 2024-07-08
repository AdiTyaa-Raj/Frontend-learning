import React, { useState } from 'react';    
import { TextField, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from '@fluentui/react';    
import './TenantsPage.css';    
import Modal from './popup';    
import { NoteEdit20Regular, Delete20Regular, ArrowClockwise20Regular, Search20Filled } from "@fluentui/react-icons";    
    
// ... your tenantsData array and columns definition  
  
const Tenant = () => {    
    // ... useState hooks and functions  
  
    return (    
        <div className="tenant-overview">    
            {/* ... header row with TextField and onboard button */}  
                
            <Table    
              // ... Table props  
            >    
              <TableHeader>    
                {/* ... TableHeaderCells */}  
              </TableHeader>    
              <TableBody>    
                {filteredTenants.map((tenant, index) => (    
                  <TableRow key={index}>    
                    <TableCell>{tenant.name}</TableCell>    
                    <TableCell>    
                      <a href={tenant.link}>{tenant.link}</a>    
                    </TableCell>    
                    <TableCell>{tenant.capacity}</TableCell>    
                    <TableCell>    
                      <NoteEdit20Regular />  
                      <Delete20Regular />    
                    </TableCell>    
                    <TableCell>    
                      <ArrowClockwise20Regular />    
                    </TableCell>    
                  </TableRow>    
                ))}    
              </TableBody>    
            </Table>    
            {/* ... Modal component */}  
        </div>    
    );    
};    
    
export default Tenant;  
