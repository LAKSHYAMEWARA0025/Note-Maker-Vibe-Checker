import React, { useState } from "react";
import "./Contact.css";
import msg_icon from './assets/msg-icon.png';
import mail_icon from './assets/mail-icon.png';
import phone_icon from './assets/phone-icon.png';
import location_icon from './assets/location-icon.png';
import white_arrow from './assets/white-arrow.png';

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "3f0b2b13-2dea-499c-9ad9-3a6cfe8dded1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    <h1 className=" d-flex text-align-center justify-content-center">FeedBack Form</h1>
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          If you have any further query, feel free to contact us via email or phone number.
          Any review and suggestion of yours about our aim would be highly acknowledgeable.
          In order to apply for work, book an appointment and directly reach to our place at given time.
        </p>
        <ul>
          <li><img src={mail_icon} alt="email icon" />Lakshyamewara0025@gmail.com</li>
          <li><img src={phone_icon} alt="phone icon" />+91 1234-5678</li>
          <li><img src={location_icon} alt="location icon" />Scaler School of Technology, Bangalore</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input className="dark" type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input className="dark" type="tel" name="phone" placeholder="Enter your mobile number" required />

          <label>Write your messages here!</label>
          <textarea className="dark" name="message" rows={6} placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn dark-btn">
            Send <img src={white_arrow} alt="arrow icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </>
  );
};

export default Contact;
