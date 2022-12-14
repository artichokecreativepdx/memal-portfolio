import { useNav } from '../customHooks/useNav';
import ContactForm from '../components/contactForm/contactForm';
const Contact = () => {
  const contactRef = useNav('Contact');

  return (
    <section ref={contactRef} id="contactContainer">
      <ContactForm />
    </section>
  );
};

export default Contact;
