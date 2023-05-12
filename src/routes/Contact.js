import React from "react";
import "./contactStyles.css";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <img
          className="pic4"
          alt="contctImg"
          src="https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.jpg?b=1&s=170667a&w=0&k=20&c=FtxQlZeGn__5ZHpc5zi9tx0GVTDZuZQoQcHT7mxDY4Q="
        />
      </div>
      <div className="contact-text">
        <h2>Contact us</h2>
        <p className="paraContact">
          Welcome to our contact us page! We're always excited to hear from our
          customers and answer any questions or concerns you may have about our
          travel services. Whether you're planning your next adventure or have
          recently returned from a trip, we're here to help.
        </p>
        <p>
          If you're looking for more information about our services, don't
          hesitate to ask. We offer personalized trip planning, group travel
          packages, destination weddings and honeymoons, and more. Our team of
          experienced travelers and travel experts is dedicated to helping you
          plan and book your next adventure, with a wide range of services
          designed to make your trip as seamless and stress-free as possible.
        </p>
        <p>
          We also love hearing about your travel experiences, so feel free to
          share your stories and photos with us on social media. You can follow
          us on Facebook, Instagram, and Twitter to stay up-to-date on our
          latest travel tips and inspiration.
        </p>
        <p>
          Thank you for considering our travel services. We look forward to
          hearing from you and helping you plan your next adventure!
        </p>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required />

          <label htmlFor="phone">Mobile Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
          />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="otp">OTP:</label>
          <input type="text" id="otp" name="otp" required />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </>
  );
}

export default Contact;
