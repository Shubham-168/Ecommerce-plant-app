import React from 'react';

import './ProductList.css'


const ProductList = ({ products, onAddToCart, onViewProduct }) => (

  
  <>
  <div className='tabs'>
      <button className='tab-button active'  > Plants </button>
      <button className='tab-button'> Pots </button>
  </div>

  <p className='description-paragraph'> 
  Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. 
  Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. 
  Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
  </p>

  <div className="product-list">
    {products.map((product) => (
      <div className="product-item" key={product.id}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => onViewProduct(product.id)}>View Product</button>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      </div>
    ))}
  </div>

  </>
);

export default ProductList;
