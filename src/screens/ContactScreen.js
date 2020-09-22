import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

function ContactScreen() {
  return (
    <div className="contact-hero">
      <h1>Contact</h1>
      <p>
        Looking to get in touch, talk about a project collaboration or just to
        say hi ?, fill the form below, or send an email to{" "}
        <span>oltostudios@gmail.com </span>& i’ll get back to you!
      </p>
      <div className="contact__group">
        <div className="animation">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_PG0c0U.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="contact__formContainer">
          <form className="contact__form">
            <h4>Get in Touch</h4>
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email@example.com" />
            <textarea type="text" name="message" placeholder="message" />
            <button className="contact__button">Send</button>
          </form>
        </div>
      </div>

      <div className="social__links">
        <h4>Social links</h4>
        <button className="github__contact">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
          Github{" "}
        </button>
        <button className="linkedin__contact">
          <FontAwesomeIcon icon={faLinkedinIn} className="github-icon" />
          Linkedin{" "}
        </button>
        <button className="instagram__contact">
          <FontAwesomeIcon icon={faInstagram} className="github-icon" />
          Instagram{" "}
        </button>
      </div>
    </div>
  );
}

export default ContactScreen;
