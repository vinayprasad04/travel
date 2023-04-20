import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__copy">
            <div className="footer__copyright">
              <p>Copyright &copy; Neom Sindalah. All Rights Reserved.</p>
            </div>
            <div className="footer__social">
              <Link className="footer__social__link">Terms of Use</Link>
              <Link className="footer__social__link">Privacy</Link>
              <Link className="footer__social__link">Cookie</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
