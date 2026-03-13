// Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{textAlign:"center", padding:"2rem 0"}}>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <p>© 2026 Restaurant Name</p>
    </footer>
  );
};

export default Footer;