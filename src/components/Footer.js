import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Copyright Adrianna Nosal</p>
    </footer>
  );
};

export default Footer;
