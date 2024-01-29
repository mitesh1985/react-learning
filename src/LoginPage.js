import React, { useState } from 'react';

import LoginForm from './Components/LoginForm';
import RegisterForm from "./Components/RegisterForm";


export default function LoginPage() {
  const [loginForm, setloginForm] = useState(true);
  console.log(loginForm, "loginForm")

    return (
      <div>
        <div className="col-md-12 mt-4">
          {/* <LoginForm heading="This Props Heading: Contact Me"/> */}
          {
            loginForm ?
            <LoginForm setloginForm={setloginForm} ></LoginForm>
            :
            <RegisterForm/>
          }
        </div>
      </div>
    );
  };