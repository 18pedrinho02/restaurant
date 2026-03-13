// src/Components/PrivacyPolicy.jsx
import { useState, useEffect } from "react";

const PrivacyPolicy = () => {

  return (
    <div style={{padding: "2rem", maxWidth: "800px", margin: "0 auto"}}>
      <h1>Privacy Policy</h1>
      <p>
        This website may use cookies, including Google Maps for location purposes. 
        By continuing to use the site, you agree to our use of cookies.
      </p>
      <h2>What are cookies?</h2>
      <p>
        Cookies are small files stored on your device that help us improve the website experience, remember your preferences, and enable features like Google Maps.
      </p>

      <h2>How we use Google Maps</h2>
      <p>
        We embed Google Maps to show the restaurant location. By accepting cookies, you allow the map to load and work correctly.
      </p>
    </div>
  );
};

export default PrivacyPolicy;