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
    <Form post="megan@memaldesigns.com">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <Button type="submit"></Button>
    </Form>
  );
};

export default Contact;
