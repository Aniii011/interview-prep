import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import Questions from "./pages/Questions";
import MockTest from "./pages/MockTest";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <BrowserRouter>
            <Navbar />
                  <Routes>
                          <Route path="/" element={<Home />} />
                                  <Route path="/login" element={<Login />} />
                                          <Route path="/register" element={<Register />} />
                                                  <Route path="/dashboard" element={<Dashboard />} />
                                                          <Route path="/topics" element={<Topics />} />
                                                                  <Route path="/questions" element={<Questions />} />
                                                                          <Route path="/mock-test" element={<MockTest />} />
                                                                                  <Route path="/results" element={<Results />} />
                                                                                          <Route path="/profile" element={<Profile />} />
                                                                                                  <Route path="/about" element={<About />} />
                                                                                                          <Route path="/contact" element={<Contact />} />
                                                                                                                  <Route path="*" element={<NotFound />} />
                                                                                                                        </Routes>
                                                                                                                              <Footer />
                                                                                                                                  </BrowserRouter>
                                                                                                                                    );
                                                                                                                                    }

                                                                                                                                    export default App;