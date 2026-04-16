import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="logo-style">NeuroByteTalks</p>
            <div className="brand-line"></div>
            <p className="footer-subtext">
              Articles snd blogs platform for modern publishing.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <p className="footer-title">Links</p>
              <Link className="footer-link" to="/">
                Home
              </Link>
              <Link className="footer-link" to="/">
                Posts
              </Link>
              <Link className="footer-link" to="/">
                About
              </Link>
            </div>

            <div className="link-group">
              <p className="footer-title">Support</p>
              <Link className="footer-link" to="/">
                Help
              </Link>
              <Link className="footer-link" to="/">
                Contact
              </Link>
              <Link className="footer-link" to="/">
                Docs
              </Link>
            </div>

            <div className="link-group">
              <p className="footer-title">Legal</p>
              <Link className="footer-link" to="/">
                Privacy
              </Link>
              <Link className="footer-link" to="/">
                Terms
              </Link>
              <Link className="footer-link" to="/">
                Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 NeuroByteTalks. All rights reserved.
          </p>

          <p className="developer">
            Designed & Developed by{" "}
            <a
              href="https://ayshasaeed.is-a.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aysha Saeed
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
