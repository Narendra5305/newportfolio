import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../contact/contact.css"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89q91w4", 
        "template_2z5nmlh", 
        form.current,
        "yMhn909S1qOX7N_7Z" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="form-main">
        <div className="form-header">
            <h3>Contact From</h3>
            <p>Get in touch</p>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
            <label>
                <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
                <input type="email" name="email" placeholder="Your email" required />
            </label>
            <label>
                <textarea name="message"  placeholder="Your message" required />
            </label>
            <button type="submit">Send</button>
        </form>
    </div>
  );
};

export default ContactForm;
