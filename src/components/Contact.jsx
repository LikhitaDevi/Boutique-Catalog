function Contact() {
  return (
    <footer id="contact">
      <div className="foot-logo">
        <h3>Thank You For Visiting</h3>

        <img
          src="/images/Logo.png"
          alt="Boutique Logo"
        />

        <p>Where Elegance Meets Style.</p>
      </div>

      <div className="social-icons">
        <a href="https://instagram.com" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://facebook.com" target="_blank">
          <i className="fab fa-facebook"></i>
        </a>

        <a href="https://youtube.com" target="_blank">
           <i className="fab fa-youtube"></i>
        </a>

        <a href="https://web.whatsapp.com/" target="_blank">
         <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div className="foot-bottom">
        <p className="foot">
          © 2026 Velora Boutique |
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;