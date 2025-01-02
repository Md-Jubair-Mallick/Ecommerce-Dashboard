import React, { useState } from "react";
import { validateRegistration } from "../../utils/validations";
import { useRegister } from "../../state/mutations/authMutations";
import "../../styles/Auth/register.css";

function Register() {
  const registerMutation = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("viewer");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateRegistration(name, email, password, role);
    if (!validate.status) {
      setErrorText(validate.message);
    } else {
      registerMutation.mutate({ name, email, password, role });
    }
  };

  return (
    <div className="registerOrLogin-container">
      <h2 className="registerOrLogin-title">Register</h2>
      <form className="registerOrLogin-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="registerOrLogin-label">Username:</label>
          <input
            className="registerOrLogin-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="registerOrLogin-label">Email:</label>
          <input
            className="registerOrLogin-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="registerOrLogin-label">Password:</label>
          <input
            className="registerOrLogin-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="registerOrLogin-label">Role:</label>
          <select
            className="registerOrLogin-select"
            value={role}
            name="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">viewer</option>
            <option value="editor">editor</option>
          </select>
        </div>
        <button className="registerOrLogin-button" type="submit">
          Register
        </button>
        {errorText && <p className="registerOrLogin-error">{errorText}</p>}
      </form>
    </div>
  );
}

export default Register;
