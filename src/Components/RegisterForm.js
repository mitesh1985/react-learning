
import '../scss/login.scss';
import '../scss/app.scss';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegisterForm(props) {
  
    
    return (
        <div>
            <div className="col-md-4 text-start mx-auto"> 
                <div className='col-md-12'>
                    <h2>Register</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control  type="text" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control  type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary">Register</Button>
                    </Form>
                    <Form.Text >
                        <p className='mt-2'>All Ready Create Account ? <Link>Login</Link> </p>
                    </Form.Text>
                </div>
            </div>
        </div>
    );
}