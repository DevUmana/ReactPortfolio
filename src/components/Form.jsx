import { useState } from "react";
import "../styles/Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

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

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setError(true);
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
        />
      </div>
      <div>
        {error && (
          <p className="error">
            A Jedi must have patience. Complete all fields, you must.
          </p>
        )}
      </div>
      <div>
        <button className="submit" type="submit" id="submit">
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
}
