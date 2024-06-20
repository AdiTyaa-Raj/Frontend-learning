import React from 'react';
import './OnboardAdminPage.css';

const OnboardAdminPage = () => {
    return (
        <div className="onboard-admin-container">
            <h1>Admin Landing Page</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" placeholder="Enter your User ID" />
                </div>
                <div className="form-group">
                    <label>Product</label>
                    <input type="text" placeholder="Enter Product" />
                </div>
                <div className="form-buttons">
                    <button type="button" className="cancel-button">Cancel</button>
                    <button type="submit" className="save-button">Save</button>
                </div>
            </form>
        </div>
    );
}

export default OnboardAdminPage;

