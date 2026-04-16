import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-col-main">
            <div className="footer-main-wrapper">
              <div className="footer-logo">
                <p width="100px" className="logo-style">
                  NeuroByteTalks
                </p>
              </div>
              <div>
                <p className="copyright-text">
                  &copy; Copyright 2025: All Rights Reserved by Neurobytetalks.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-col-links">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li>
                <Link className="footer-link" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-list">
              <li>
                <Link className="footer-link" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col-legals">
            <h3 className="footer-heading">Legals</h3>
            <ul className="footer-list">
              <li>
                <Link className="footer-link" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
