import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Login() {
  useEffect(() => cookies.remove('user_id', { path: '/' }) , []);
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");

  function validateForm() {
    return email.length > 0 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user_deets = {
      "name": name,
      "email": email
    };
    axios.post('/add', user_deets).then(response => {
      console.log("SUCCESS", response.data.id)
      cookies.set('user_id', response.data.id)
      window.location = "/interactions"
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Button block size="lg" type="submit" disabled={!validateForm()} id="login-btn">
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}