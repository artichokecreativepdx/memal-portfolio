import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

export const ContactForm = () => {
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
    <section>
      <form ref={form} onSubmit={sendEmail}>
        <input
          label="name"
          id="name"
          className="u-full-width"
          type="name"
          placeholder="Name"
        />
        <input
          label="email"
          id="email"
          className="u-full-width"
          type="email"
          placeholder="Email"
        />

        <textarea
          label="message"
          id="message"
          className="u-full-width"
          type="message"
          placeholder="Connect with me"
        />

        <button type="submit">{status}</button>
      </form>
    </section>
  );
};

export default ContactForm;
