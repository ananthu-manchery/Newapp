
import React, { useContext, useState } from 'react';
import { myContext } from './context';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Viewprod() {
  const { Pdata, setPdata } = useContext(myContext);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); 
  const [formData, setFormData] = useState({ id: '', name: '', price: '', category: '', image: '' });
 const navigate=useNavigate()
  const handleDelete = (id) => {
    const updatedPdata = Pdata.filter(prod => prod.id !== id);
    setPdata(updatedPdata);
  };

  const handleEdit = (prod) => {
    setCurrentProduct(prod);
    setIsEditMode(true);
    setFormData({ id: prod.id, name: prod.name, price: prod.price, category: prod.category, image: prod.image });
    setShowModal(true);
  };

 

  const handleClose = () => setShowModal(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      const updatedPdata = Pdata.map(prod =>
        prod.id === formData.id ? { ...prod, ...formData } : prod
      );
      setPdata(updatedPdata);
    } else {
      const newProduct = { ...formData, id: Date.now().toString() }; 
      setPdata([...Pdata, newProduct]);
    }
    setShowModal(false);
  };
  
  const handleBack = () => {
    navigate(-1); 
};

  return (
    <div>
       <Button  variant="secondary" onClick={handleBack} style={{background:"none",color:"blue",border:"none",fontSize:"25px"}} >
<img className='arrow-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAACampqCgoL7+/uysrK3t7fBwcEdHR0aGhrGxsa9vb0QEBAYGBi6uroJCQnMzMysrKze3t4kJCTX19cyMjL19fVhYWHv7+9FRUV7e3sqKiro6OhsbGw3NzdSUlKLi4sTHDTzAAAB60lEQVRoge2ZXZKCMBCEM7hA5C9ERFRW8f6n3GhJKel9o+eNPsBXoXsyyQRjNm3i6uh9+quDPgydiPS3kwI7lbfuBz67nuEynNls+VJBZtff8IHKbmShnslOl2yxTPY+ghNtiTwJymnsZZZPTbRSLF3MrloWO85SpKaZAllKnbHYJaybtzvTKkbbhsUugS00TzDLiucJZLnXzJJXg7B3eFk2sOc1s3SKWVrFLF3JYqMnlsbOIEtH8wTPHWKvUswyx3XT9g5m2dM8ycCTy5HFjuvb3RMWGu8Q9c4n6+TnD8/x3FmvfnhNIoUC+qk6LP48KcHlcjaJFvt5EKgtPCzdWD34aDo9uNW0ZTJeD96Yk2YpmqMSu3p1gBZaIkF2eD9E5HHF2Otjt0qJ/0w4bQR3d2/Mzwotmm4xxp91JT6v5HD9vNBGt+AMNHXHm2gxVelox/9/h4YjOlPA2iumM+B7R3waanHcJ9JzqPeO6AymWtOuXsEZ3VShR47MVMEZ3iOOdqo4CFhmqnCZ4Y26Ye1A75kdGFMlOoMdmFmRmOrITBUGakt8+UdnBuJfC0yVWDJ4Nt2IcLhxdEx4fOOg/laIU5248OXZRLzJvOmftfNe/j/0uYvtmZU463QbQ9WMKj/+gg6Zz/h//TZt+tIf6zEaOzlszT8AAAAASUVORK5CYII=" alt="" />
                </Button>
    <Container className="admin-view-products">
      <Link to="/display" className="back-link">Back to Display</Link>
      <div className="mt-4">
        <h1 className="text-center page-title">Admin: View Products</h1>
     

        <Row className="table-container">
          <Col>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Pdata.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>₹ {prod.price}/-</td>
                    <td>{prod.category}</td>
                    <td><img src={prod.image} alt={prod.name} style={{ width: '50px', height: '50px' }} /></td>
                    <td className="actions">
                      <Button variant="primary" onClick={() => handleEdit(prod)}>Edit</Button>
                      <Button variant="danger" onClick={() => handleDelete(prod.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>{isEditMode ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {formData.image && (
                <img src={formData.image} alt="Product Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
              )}
            </Form.Group>
            <div className="modal-footer">
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" type="submit">Save Changes</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
    </div>
  );
}

