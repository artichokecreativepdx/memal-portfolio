import React, { useRef } from 'react';
import './contactForm.css';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
    <div className="container contactContainer">
      <section className="contactForm">
        <h2>contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            label="name"
            id="name"
            className="u-full-width"
            name="user_name"
            type="text"
            placeholder="Name"
          />
          <input
            label="email"
            id="email"
            className="u-full-width"
            name="user_email"
            type="email"
            placeholder="Email"
          />

          <textarea
            label="message"
            id="message"
            className="u-full-width"
            name="message"
            type="message"
            placeholder="Connect with me"
          />

          <button type="submit" value="send">
            send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
