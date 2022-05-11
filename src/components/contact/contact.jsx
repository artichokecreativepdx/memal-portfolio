import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const Contact = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch('https://memaldesigns.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input fluid label="name" id="name" type="name" placeholder="Name" />
      <Form.Input
        fluid
        label="email"
        id="email"
        type="email"
        placeholder="Email"
      />

      <Form.TextArea
        label="message"
        id="message"
        type="message"
        placeholder="Connect with me"
      />

      <Form.Button type="submit">{status}</Form.Button>
    </Form>
  );
};

export default Contact;
