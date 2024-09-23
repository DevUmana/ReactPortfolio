import { useState } from "react";
import "../styles/Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
  }

  function handleInputError(e) {
    let errorMessage = "";
  
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name && !email && !message) {
      errorMessage = "Please fill out all fields.";
    } else if (!name && !email) {
      errorMessage = "Please enter your name and email.";
    } else if (!name && !message) {
      errorMessage = "Please enter your name and message.";
    } else if (!email && !message) {
      errorMessage = "Please enter your email and message.";
    } else if (!name) {
      errorMessage = "Please enter your name.";
    } else if (!email) {
      errorMessage = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
      errorMessage = "Please enter a valid email address.";
    } else if (!message) {
      errorMessage = "Please enter your message.";
    }
  
    if (errorMessage) {
      setError(true);
      setErrorMessage(errorMessage);
    } else {
      setError(false);
      setErrorMessage(""); // Clear the error message if all fields are filled correctly
    }
  }
  

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setError(true);
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setError(false);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onMouseLeave={handleInputError}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
          value={email}
          onMouseLeave={handleInputError}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          placeholder="Leave a message"
          onChange={handleInputChange}
          value={message}
          onMouseLeave={handleInputError}
        />
      </div>
      <div>{error && <p className="error">{errorMessage}</p>}</div>
      <div>
        <button className="submit" type="submit" id="submit">
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
}
