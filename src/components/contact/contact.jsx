// import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Contact = () => {
  // const [status, setStatus] = useState('Submit');
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch('https://www.memaldesigns.com/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus('Submit');
  //   let result = await response.json();
  //   alert(result.status);
  // };
  return (
    <Form className="form" inverted post="megan@memaldesigns.com">
      <Form.Field>
        <label>First Name</label>
        <input type="text" id="name" required />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input type="email" id="email" required />
      </Form.Field>
      <Form.Field>
        <label>Message</label>
        <textarea id="message" required />
      </Form.Field>
      <Button type="submit" inverted>
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
