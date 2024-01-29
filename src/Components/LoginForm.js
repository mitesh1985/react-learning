
import '../scss/login.scss';
import '../scss/app.scss';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
    /* const [text, setText] = useState ("Fill Detiles"); */
    /* const handleClick = () => setText ("Succecfully"); */
    
    return (
        <div>
            <h1 className="mb-5">{props.heading}</h1>
            <div className="col-md-4 text-start mx-auto">
            {/* <div className='mb-3'>{text}</div> */}
                <div className='col-md-12'>
                    <h2>Login</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control  type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={()=>{props.setloginForm(false)}} variant="primary">Login</Button>
                    </Form>
                    <Form.Text >
                        <p className='mt-2'>Create Account <Link>Register Now</Link> </p>
                    </Form.Text>
                </div>
            </div>
        </div>
    );
}