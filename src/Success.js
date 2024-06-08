import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css'; // Import the CSS file

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="success-container">
      <h2>Form Submission Successful</h2>
      <p>Here are the details you submitted:</p>
      <ul>
        <li><strong>First Name:</strong> {formData.firstName}</li>
        <li><strong>Last Name:</strong> {formData.lastName}</li>
        <li><strong>Username:</strong> {formData.username}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone Number:</strong> {formData.phoneNo}</li>
        <li><strong>Country:</strong> {formData.country}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>PAN Number:</strong> {formData.panNo}</li>
        <li><strong>Aadhar Number:</strong> {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default Success;
