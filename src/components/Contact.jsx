import 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <div className="contact-details">
          <p>Email: <a href="mailto:yourname@example.com">johnathanchastain435@gmail.com</a></p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/johnathan-chastain-5369302bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/JohnathanChastain" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
