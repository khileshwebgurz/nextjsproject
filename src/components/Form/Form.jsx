"use client";
import React, { useState } from "react";
import "./Form.css";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import formImg from "../../../public/Images/formImage.webp";

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.captcha )
    console.log(captcha)
    if (formData.captcha !== captcha) {
      alert("Invalid CAPTCHA");
      return;
    }
    console.log("Form submitted:", formData);
    setShowModal(false);
  };

  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData((prevData) => ({
      ...prevData,
      captcha: "",
    }));
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Get a quote</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-image">
              <Image src={formImg} alt="formImg" height={1200} width={700} />
            </div>
            <div className="modal-form">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2>We are hiring</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="message">Website:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <select name="cars" id="cars">
                  <option value="volvo">Digital Marketing</option>
                  <option value="saab">Content Marketing</option>
                  <option value="mercedes">SEO</option>
                  <option value="audi">Web Development</option>
                  <option value="audi">Full Stack Web development</option>
                  <option value="audi">Php Web Development</option>
                  <option value="audi">Wordpress Development</option>
                </select>

                <PhoneInput
                  defaultCountry="ua"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />

                <div className="captcha-container">
                  <div className="captcha">{captcha}</div>
                  <button
                    type="button"
                    className="reload-captcha"
                    onClick={reloadCaptcha}
                  >
                    Reload CAPTCHA
                  </button>
                </div>
                <label htmlFor="captcha">Enter CAPTCHA:</label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Get Quote</button>
                <h5>We respect your privacy</h5>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
