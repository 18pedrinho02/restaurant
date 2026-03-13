// Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-bottom">
      <Link to="/privacy-policy">Privacy Policy</Link>
      <p>© 2026 Restaurant Belle Cousin. All rights reserved</p>
      <p>Developed by Pedro Costa</p>
    </footer>
  );
};

export default Footer;