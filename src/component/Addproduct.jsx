import React, { useEffect, useState } from 'react';
import  { useContext } from 'react';
import { myContext } from './context';
import './admin.css';


export default function AddProduct() {
  const { Pdata, setPdata } = useContext(myContext);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [nextProductId, setNextProductId] = useState(1);

  useEffect(() => {
    if (Pdata.length > 0) {
      const maxId = Math.max(...Pdata.map(product => product.id));
      setNextProductId(maxId + 1);
    }
  }, [Pdata]);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: nextProductId,
      name: productName,
      price: productPrice,
      description: productDescription,
      image: URL.createObjectURL(productImage),
      category: productCategory,
    };

    setPdata([...Pdata, newProduct]);

    console.log('Product Added:', newProduct);

    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage(null);
    setProductCategory('');
    setSuccessMessage('Product successfully added!');
    setNextProductId(nextProductId + 1);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);


  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleAddProduct} className="add-product-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product Category:</label>
          <select
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="electronics">Mobiles</option>
            <option value="fashion">Laptops</option>
            <option value="home">home appliances</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
            <option value="toys">Toys</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="file"
            id="productImage"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
