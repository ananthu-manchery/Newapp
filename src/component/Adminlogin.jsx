import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [message, setMessage] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Both fields are required');
      return;
    }

    
    if (email === 'admin@example.com' && password === 'admin123') {
 
      navigate('/admindash');
    } else {
      setMessage('Invalid credentials');
    }
  };

  const handleBack = () => {
    navigate(-1); 
};
  return (
    <div className="admin-login-container">
       <Button  variant="secondary" onClick={handleBack} style={{background:"none",color:"blue",border:"none",fontSize:"25px"}} >
<img className='arrow-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAACampqCgoL7+/uysrK3t7fBwcEdHR0aGhrGxsa9vb0QEBAYGBi6uroJCQnMzMysrKze3t4kJCTX19cyMjL19fVhYWHv7+9FRUV7e3sqKiro6OhsbGw3NzdSUlKLi4sTHDTzAAAB60lEQVRoge2ZXZKCMBCEM7hA5C9ERFRW8f6n3GhJKel9o+eNPsBXoXsyyQRjNm3i6uh9+quDPgydiPS3kwI7lbfuBz67nuEynNls+VJBZtff8IHKbmShnslOl2yxTPY+ghNtiTwJymnsZZZPTbRSLF3MrloWO85SpKaZAllKnbHYJaybtzvTKkbbhsUugS00TzDLiucJZLnXzJJXg7B3eFk2sOc1s3SKWVrFLF3JYqMnlsbOIEtH8wTPHWKvUswyx3XT9g5m2dM8ycCTy5HFjuvb3RMWGu8Q9c4n6+TnD8/x3FmvfnhNIoUC+qk6LP48KcHlcjaJFvt5EKgtPCzdWD34aDo9uNW0ZTJeD96Yk2YpmqMSu3p1gBZaIkF2eD9E5HHF2Otjt0qJ/0w4bQR3d2/Mzwotmm4xxp91JT6v5HD9vNBGt+AMNHXHm2gxVelox/9/h4YjOlPA2iumM+B7R3waanHcJ9JzqPeO6AymWtOuXsEZ3VShR47MVMEZ3iOOdqo4CFhmqnCZ4Y26Ye1A75kdGFMlOoMdmFmRmOrITBUGakt8+UdnBuJfC0yVWDJ4Nt2IcLhxdEx4fOOg/laIU5248OXZRLzJvOmftfNe/j/0uYvtmZU463QbQ9WMKj/+gg6Zz/h//TZt+tIf6zEaOzlszT8AAAAASUVORK5CYII=" alt="" />
                </Button>
    <h3 className="head1">Admin Login</h3>
    <form className="login1" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </Form.Group> <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </Form.Group>
      <br/>
      <Button  variant="primary" type="submit">
        Login
      </Button>
    </form>
    {message && <p id="alert">{message}</p>}
  </div>
  )
}
