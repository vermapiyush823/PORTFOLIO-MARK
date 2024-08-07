import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_llx8o0d",
        "template_s3mm6rq",
        form.current,
        "Wc9KtleiUh6r-anvi"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDesc">
        Please feel free to contact me if you have any questions or concerns.
      </span>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          name="to_name"
          placeholder="Your name..."
        />
        <input
          type="email"
          className="email"
          name="rom_email"
          placeholder="Your email..."
        />
        <textarea
          name="message"
          className="msg"
          rows={5}
          placeholder="Your message..."
        ></textarea>
        <button
          className="submitBtn"
          value="Send"
          type="submit"
          onClick={() => {
            alert("Your message has been sent successfully");
          }}
        >
          Send
        </button>
        <div className="links">
          <a href="https://www.facebook.com">
            <FaFacebook className="link link1" />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter className="link link2" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="link link3" />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin className="link link4" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
