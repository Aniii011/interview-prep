import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
      const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);

          function handleChange(e) {
              setFormData({ ...formData, [e.target.name]: e.target.value });
                }

                  function handleSubmit(e) {
                      e.preventDefault();
                          setError("");

                              if (!formData.email || !formData.password) {
                                    setError("Please fill in all fields.");
                                          return;
                                              }

                                                  setLoading(true);

                                                      // Check if user exists in localStorage
                                                          const savedUser = JSON.parse(localStorage.getItem("user"));
                                                              if (!savedUser || savedUser.email !== formData.email || savedUser.password !== formData.password) {
                                                                    setLoading(false);
                                                                          setError("Invalid email or password.");
                                                                                return;
                                                                                    }

                                                                                        localStorage.setItem("loggedIn", "true");
                                                                                            setLoading(false);
                                                                                                navigate("/dashboard");
                                                                                                  }

                                                                                                    return (
                                                                                                        <div className="auth-page">
                                                                                                              <div className="auth-card">
                                                                                                                      <h2>Welcome Back 👋</h2>
                                                                                                                              <p className="auth-subtitle">Login to continue your preparation</p>

                                                                                                                                      {error && <div className="auth-error">{error}</div>}

                                                                                                                                              <form onSubmit={handleSubmit}>
                                                                                                                                                        <div className="form-group">
                                                                                                                                                                    <label>Email Address</label>
                                                                                                                                                                                <input
                                                                                                                                                                                              type="email"
                                                                                                                                                                                                            name="email"
                                                                                                                                                                                                                          placeholder="Enter your email"
                                                                                                                                                                                                                                        value={formData.email}
                                                                                                                                                                                                                                                      onChange={handleChange}
                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                      <div className="form-group">
                                                                                                                                                                                                                                                                                                  <label>Password</label>
                                                                                                                                                                                                                                                                                                              <input
                                                                                                                                                                                                                                                                                                                            type="password"
                                                                                                                                                                                                                                                                                                                                          name="password"
                                                                                                                                                                                                                                                                                                                                                        placeholder="Enter your password"
                                                                                                                                                                                                                                                                                                                                                                      value={formData.password}
                                                                                                                                                                                                                                                                                                                                                                                    onChange={handleChange}
                                                                                                                                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                    <button type="submit" className="auth-btn" disabled={loading}>
                                                                                                                                                                                                                                                                                                                                                                                                                                {loading ? "Logging in..." : "Login"}
                                                                                                                                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                  </form>

                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p className="auth-switch">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Don't have an account? <Link to="/register">Register here</Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        export default Login;