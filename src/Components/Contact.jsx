import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (formData.user_name.trim() === "") {
      errors.user_name = "Please enter your name";
      isValid = false;
    }

    if (formData.user_email.trim() === "") {
      errors.user_email = "Please enter your email";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Please enter a message";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_e2fxjod",
        "template_r2ynbal",
        e.target,
        "J84r-q2zkuTj1CTly"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputStyle = {
    width: "100%",
    height: "40px",
    boxShadow: "0px 0px 2px 0px #edededb6",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    backgroundColor: "#22222260",
    color: "white",
    padding: "10px",
    marginBottom: "20px",
  };

  const inputMessageStyle = {
    width: "100%",
    boxShadow: "0px 0px 2px 0px #edededb6",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    backgroundColor: "#22222260",
    color: "white",
    padding: "10px",
    marginBottom: "20px",
  };

  return (
    <div className="container" style={{ marginTop: "30px" }} id="contact-us">
      <div>
        <div>
          <p style={{ color: "gray", marginTop: "20px" }}>
            Hire Me / Today for Exquisite Custom Web/App Development Solutions!
          </p>
          <h2 className="Education_text_main">Contact.</h2>
        </div>
        <div>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
              style={inputStyle}
              value={formData.user_name}
              onChange={handleChange}
            />
            {errors.user_name && <p>{errors.user_name}</p>}
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
              style={inputStyle}
              value={formData.user_email}
              onChange={handleChange}
            />
            {errors.user_email && <p>{errors.user_email}</p>}
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              style={inputMessageStyle}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p>{errors.message}</p>}
            <input type="submit" value="Send" className="button sendbutton" />
            <p>
              {success && "Thanks for contacting me! I will contact you soon."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
