import { Link } from "react-router-dom";
import "./Topics.css";

const topics = [
  { name: "React", icon: "⚛️", count: 5, color: "#61dafb", desc: "Hooks, components, routing and more" },
    { name: "JavaScript", icon: "🟨", count: 5, color: "#f7df1e", desc: "ES6, closures, promises and DOM" },
      { name: "HTML", icon: "🌐", count: 3, color: "#e34c26", desc: "Semantic HTML, forms and structure" },
        { name: "CSS", icon: "🎨", count: 3, color: "#264de4", desc: "Flexbox, grid, animations and more" },
          { name: "General", icon: "💡", count: 4, color: "#2ecc71", desc: "REST, Git, Agile and fundamentals" },
          ];

          function Topics() {
            return (
                <div className="topics-page">
                      <div className="topics-header">
                              <h1>Interview Topics 🗂️</h1>
                                      <p>Choose a topic to browse questions or jump straight into a mock test</p>
                                            </div>

                                                  <div className="topics-grid">
                                                          {topics.map((topic) => (
                                                                    <div className="topic-card" key={topic.name} style={{ borderTop: `4px solid ${topic.color}` }}>
                                                                                <div className="topic-icon">{topic.icon}</div>
                                                                                            <h3>{topic.name}</h3>
                                                                                                        <p>{topic.desc}</p>
                                                                                                                    <span className="topic-count">{topic.count} Questions</span>
                                                                                                                                <div className="topic-buttons">
                                                                                                                                              <Link to={`/questions?category=${topic.name}`} className="topic-btn-outline">
                                                                                                                                                              Browse
                                                                                                                                                                            </Link>
                                                                                                                                                                                          <Link to={`/mock-test?category=${topic.name}`} className="topic-btn-fill">
                                                                                                                                                                                                          Practice
                                                                                                                                                                                                                        </Link>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                  export default Topics;