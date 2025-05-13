const Contact = () => {
    return (
      <main className="Contact">
        <h2>Contact Us</h2>
        <form className="contactForm" onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for reaching out! We'll get back to you soon.");
        }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" required></textarea>
  
          <button type="submit">Send Message</button>
        </form>
      </main>
    );
  };
  
  export default Contact;
  