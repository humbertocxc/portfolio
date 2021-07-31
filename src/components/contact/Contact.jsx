import { useState } from "react";
import "./contact.scss";
import {Mail, GitHub, LinkedIn, Instagram, Twitter } from "@material-ui/icons"

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="container">
          <a href="https://github.com/humbertocxc" target="_blank" rel="noreferrer" className="logo">
              <div className="itemContainer">
                  <GitHub className="icon"/>
                  <span>GitHub</span>
              </div>
          </a>
          <a href="https://www.linkedin.com/humberto-gessinger-080317172/" target="_blank" rel="noreferrer" className="logo">
              <div className="itemContainer">
                  <LinkedIn className="icon"/>
                  <span>LinkedIn</span>
              </div>
          </a>
          <a href="https://twitter.com/1bertu_" target="_blank" rel="noreferrer" className="logo">
              <div className="itemContainer">
                  <Twitter className="icon"/>
                  <span>Twitter</span>
              </div>
          </a>
          <a href="https://www.instagram.com/humbertognm/" target="_blank" rel="noreferrer" className="logo">
              <div className="itemContainer">
                  <Instagram className="icon"/>
                  <span>Instagram</span>
              </div>
          </a>
          <div className="item">
              <Mail className="icon"/>
              <span>humberto.gnm98@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
