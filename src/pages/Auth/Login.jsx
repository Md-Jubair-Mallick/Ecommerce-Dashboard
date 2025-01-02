import React, { useState } from "react";
import { validateLogin } from "../../utils/validations";
import { useLogin } from "../../state/mutations/authMutations";
import "../../styles/Auth/register.css";

function Login() {
  const loginMutation = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateLogin(email, password);
    if (!validate.status) {
      setErrorText(validate.message);
    } else {
        loginMutation.mutate({ email, password });
    }
  };

  return (
    <div className="registerOrLogin-container">
      <h2 className="registerOrLogin-title">Login</h2>
      <form className="registerOrLogin-form" onSubmit={handleSubmit}>
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
        <button className="registerOrLogin-button" type="submit">
          Login
        </button>
        {errorText && <p className="registerOrLogin-error">{errorText}</p>}
      </form>
    </div>
  );
}

export default Login;
