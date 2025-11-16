import React, { useState } from "react";
import { validateForm } from "../Validation/FormValidation";
import "./Contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop submission if errors exist
    }

    setErrors({}); // clear errors if valid

    const newEntry = {
      id: submittedData.length + 1,
      ...formData,
    };

    setSubmittedData([...submittedData, newEntry]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Phone No:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="submitted-section">
        <h2>Submitted Data</h2>
        {submittedData.length === 0 ? (
          <p>No data submitted yet.</p>
        ) : (
          <ul>
            {submittedData.map(({ id, name, email, phone, address, message }) => (
              <li key={id}>
                <strong>ID:</strong> {id} <br />
                <strong>Name:</strong> {name} <br />
                <strong>Email:</strong> {email} <br />
                <strong>Phone:</strong> {phone} <br />
                <strong>Address:</strong> {address} <br />
                <strong>Message:</strong> {message}
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
