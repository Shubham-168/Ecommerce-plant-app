import React from 'react';
import './Modal.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onClose(); // Close the modal
    navigate('/'); // Redirect to the product list page
  };

  return (
    isOpen ? (
      <div className="modal">
        <div className="modal-content">
          <p className="cart-text">Your cart</p>
          <h2>Congratulations! Order Placed</h2>
          <p>Thank you for choosing our services. We will soon get in touch with you.</p>
          <button className="continue-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    ) : null
  );
};

export default Modal;
