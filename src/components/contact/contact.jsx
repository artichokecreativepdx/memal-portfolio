import React, { useRef, useState } from 'react';
import { Form } from 'semantic-ui-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [status, setStatus] = useState('Submit');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_bxu1yhr',
        'template_gxd84ck',
        'form',
        'f3RLYKLyl6omAjNRt'
      )
      .then(
        function (response) {
          //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          alert('Email sent successfully!');
        },
        function (error) {
          //console.log("FAILED", error);
          alert('FAILED!' + error);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
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
