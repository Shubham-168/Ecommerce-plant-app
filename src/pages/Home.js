import React, { useState } from 'react';
import { mockPlants } from '../mockData';
import ProductList from '../components/ProductList';
import Modal from '../components/Modal';

const Home = () => {
  const [products] = useState(mockPlants);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddToCart = () => {
    setModalOpen(true);
  };

  const handleViewProduct = (id) => {
    window.location.href = '/thank-you';
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="home">
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onViewProduct={handleViewProduct}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
