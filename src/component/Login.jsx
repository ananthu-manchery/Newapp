import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";




export default function Login() {
  const navigate=useNavigate()
  function handleChange() {

    
  }
  const [message, setMessage] = useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [rememberme,setRememberMe]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!email || !password) {
      setMessage('Both fields are required');
      return;
    }
    if (email === 'login@example.com' && password === 'login123') {
      setMessage('Successfully logged in');
      setTimeout(() => {
        navigate('/Display');
      }, 2000);
    } else {
      setMessage('Invalid credentials');
    }
   
  };
  return (
    
    
   <div className="admin-login-container">

      
    <div>
      <h3 className="head1">Login page</h3>
   
    </div>
    <div>
    <form className="login1">

    <Form  className="login-det"> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"    onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me"  checked={rememberme}
          onChange={(e) => setRememberMe(e.target.checked)}/>
      </Form.Group>
      <Link className="link5" to="/signup" >  Forgot password?</Link>
      <Link className="link5" to="/signup" >  sign  up</Link>
      <Button onClick={handleSubmit } variant="primary" type="submit" style={{display:"flex",alignItems:"center"}}>
        Submit
      </Button>
    </Form>
      
     

      
    </form>
    {message && <p id="alert">{message}</p>}
   
    </div>
   
    </div>
  )
}
