"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import categoryLinks from "../data/Categories";
const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    desc: "",
    captcha: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("-1");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== captcha) {
      alert("Invalid CAPTCHA");
      return;
    }
    console.log("Form submitted:", formData);
  };

  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData((prevData) => ({
      ...prevData,
      captcha: "",
    }));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value !== "-1") {
      router.push(categoryLinks[event.target.value]);
    }
  };

  return (
    <form>
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
      <label htmlFor="message">Description:</label>
      <textarea
        id="desc"
        name="desc"
        value={formData.desc}
        onChange={handleChange}
        required
      />
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      <div className="captcha-container">
        <div className="captcha">{captcha}</div>
        <button type="button" className="reload-captcha" onClick={reloadCaptcha}>
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
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>

      {/* Dropdown for category selection */}
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="-1">Select Category</option>
        {Object.keys(categoryLinks).map((category) => (
          <option key={category} value={category}>
            {category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </option>
        ))}
      </select>
    </form>
  );
};

export default ContactForm;
