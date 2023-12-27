import { useState } from "react";
import "./SurveyForm.css";
import PropTypes from "prop-types";

const SurveyForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // const [formSubmissions, setFormSubmissions] = useState([]); // State to store form submissions

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  SurveyForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5173/api/submitSurvey", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log("Form submitted successfully!");
  //       // Handle any success actions here
  //     } else {
  //       console.error("Error submitting form:", response.statusText);
  //       // Handle any error responses here
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     // Handle other error scenarios here
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onFormSubmit(formData);
  //   const updatedSubmissions = [...formSubmissions, formData]; // Add current form data to submissions array
  //   setFormSubmissions(updatedSubmissions);
  //   console.log(updatedSubmissions); // Log updated submissions array to the console
  //   setFormData({
  //     name: "",
  //     gender: "",
  //     nationality: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     message: "",
  //   }); // Clear the form fields after submission
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData); // Pass the form data to the parent component
    setFormData({
      name: "",
      gender: "",
      nationality: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    }); // Clear the form fields after submission
  };

  return (
    <div className="main-container">
      <h1 className="form-heading">Survey Form</h1>
      <form className="survey-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="input-field"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            className="input-field"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            className="input-field"
            name="nationality"
            placeholder="Enter your nationality"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input-field"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            className="input-field"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            className="input-field"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="input-field"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
