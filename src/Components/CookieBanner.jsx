// src/Components/CookieBanner.jsx
import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "true") setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#333",
      color: "white",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 9999
    }}>
      <span>We use cookies to improve your experience. By using the site, you agree to our Privacy Policy.</span>
      <button 
        onClick={handleAccept} 
        style={{
          backgroundColor: "#d4ac0d",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;