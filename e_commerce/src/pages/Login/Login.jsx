import React from 'react';
import { Container, Form, Label, Input, Button, ErrorMessage } from './Login-styles'; // Importe os estilos do LoginStyles.js

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implemente sua lógica de login aqui
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" />

        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />

        <Button type="submit">Login</Button>
      </Form>
      <ErrorMessage>{/* Mostrar mensagens de erro aqui, se necessário */}</ErrorMessage>
    </Container>
  );
};

export default Login;
