import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
              <div className="navbar-brand">
                      <Link to="/">InterviewPrep</Link>
                            </div>
                                  <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                                          ☰
                                                </button>
                                                      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                                                              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                                                      <li><Link to="/topics" onClick={() => setMenuOpen(false)}>Topics</Link></li>
                                                                              <li><Link to="/questions" onClick={() => setMenuOpen(false)}>Questions</Link></li>
                                                                                      <li><Link to="/mock-test" onClick={() => setMenuOpen(false)}>Mock Test</Link></li>
                                                                                              <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                                                                                                      <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
                                                                                                              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                                                                                                                    </ul>
                                                                                                                        </nav>
                                                                                                                          );
                                                                                                                          }

                                                                                                                          export default Navbar;