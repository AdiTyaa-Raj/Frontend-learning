import React from 'react';  
import './popup.css';  
import { Dismiss20Filled } from '@fluentui/react-icons';  
  
const Modal = ({ isOpen, onClose, children }) => {  
    if (!isOpen) return null;  
    
    return (  
        <div className="modal-overlay">  
            <div className="modal-content">  
                <button className="modal-close-button" onClick={onClose}>  
                    <Dismiss20Filled />  
                </button>  
                {children}  
            </div>  
        </div>  
    );  
};  
  
export default Modal;  
