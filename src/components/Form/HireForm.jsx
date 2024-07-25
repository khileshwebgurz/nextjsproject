"use client";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const HireForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    last: "",
    captcha: "",
  });
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
    console.log(formData.captcha);
    console.log(captcha);
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
     <button onClick={() => setShowModal(true)}>Apply Here</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
           
            <div className="modal-form">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2>We are hiring</h2>
              <form>
               
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name*"
                  required
                />
               
               <input
                  type="text"
                  id="last"
                  name="last"
                  value={formData.last}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  required
                />


                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                />
               

                <select name="job" id="job">
                  <option value="business-analyst">Business Analyst</option>
                  <option value="content-marketing">Content Marketing</option>
                  <option value="seo">SEO</option>
                  <option value="web-development">Web Development</option>
                  <option value="full-stack">Full Stack Web development</option>
                  <option value="php">Php Web Development</option>
                  <option value="wordpress">Wordpress Development</option>
                  <option value="hubspot">HubSpot Development</option>
                  <option value="mern">Mern Stack Development</option>
                  <option value="ios">iOS Development</option>
                  <option value="reactjs">React JS Development</option>
                  <option value="flutter">Flutter Development</option>
                  <option value="reactnative">React Native Development</option>
                </select>

                <PhoneInput
                  country="ua"
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
                <input type="file" name="Choose File"/>
                <button type="submit">Apply Now</button>
               
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default HireForm;
