import { Container } from 'semantic-ui-react';
function Contact() {
  return (
    <div>
      <Container>
        <div id="contact">
          <h1>Contact</h1>
          <br />
          <p>
            If you would like to get in contact with me, please feel free to
            leave me a message, I would love to hear from you.
          </p>
          <form className="ui form" method="post" action="">
            <div className="field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                defaultValue={''}
              />
            </div>
            <div className="field">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Contact;
