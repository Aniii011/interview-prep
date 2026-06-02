import "./About.css";

const teamMembers = [
  { name: "Your Name Here", role: "Frontend Developer", matric: "Your Matric No." },
    { name: "Member 2", role: "UI Designer", matric: "Matric No." },
      { name: "Member 3", role: "React Developer", matric: "Matric No." },
        { name: "Member 4", role: "Documentation", matric: "Matric No." },
        ];

        function About() {
          return (
              <div className="about-page">

                    <div className="about-hero">
                            <h1>About InterviewPrep 🎯</h1>
                                    <p>A React-based platform to help students and developers prepare for technical job interviews.</p>
                                          </div>

                                                <div className="about-section">
                                                        <h2>Our Mission</h2>
                                                                <p>InterviewPrep was built to make interview preparation accessible, structured and effective. Whether you are preparing for your first tech job or levelling up your skills, our platform gives you the tools to succeed.</p>
                                                                      </div>

                                                                            <div className="about-section">
                                                                                    <h2>What We Offer</h2>
                                                                                            <div className="offer-grid">
                                                                                                      <div className="offer-card"><span>📚</span><h3>Question Bank</h3><p>200+ curated interview questions across multiple topics</p></div>
                                                                                                                <div className="offer-card"><span>⏱️</span><h3>Mock Tests</h3><p>Timed tests that simulate real interview conditions</p></div>
                                                                                                                          <div className="offer-card"><span>📊</span><h3>Progress Tracking</h3><p>Dashboard to monitor scores and improvement over time</p></div>
                                                                                                                                    <div className="offer-card"><span>📱</span><h3>Responsive Design</h3><p>Works perfectly on mobile, tablet and desktop</p></div>
                                                                                                                                            </div>
                                                                                                                                                  </div>

                                                                                                                                                        <div className="about-section">
                                                                                                                                                                <h2>Technologies Used</h2>
                                                                                                                                                                        <div className="tech-tags">
                                                                                                                                                                                  <span className="tech-tag">React</span>
                                                                                                                                                                                            <span className="tech-tag">React Router</span>
                                                                                                                                                                                                      <span className="tech-tag">useState</span>
                                                                                                                                                                                                                <span className="tech-tag">useEffect</span>
                                                                                                                                                                                                                          <span className="tech-tag">localStorage</span>
                                                                                                                                                                                                                                    <span className="tech-tag">CSS3</span>
                                                                                                                                                                                                                                              <span className="tech-tag">Vercel</span>
                                                                                                                                                                                                                                                        <span className="tech-tag">GitHub</span>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                            <div className="about-section">
                                                                                                                                                                                                                                                                                    <h2>Meet the Team</h2>
                                                                                                                                                                                                                                                                                            <div className="team-grid">
                                                                                                                                                                                                                                                                                                      {teamMembers.map((member, i) => (
                                                                                                                                                                                                                                                                                                                  <div className="team-card" key={i}>
                                                                                                                                                                                                                                                                                                                                <div className="team-avatar">{member.name.charAt(0)}</div>
                                                                                                                                                                                                                                                                                                                                              <h3>{member.name}</h3>
                                                                                                                                                                                                                                                                                                                                                            <p className="team-role">{member.role}</p>
                                                                                                                                                                                                                                                                                                                                                                          <p className="team-matric">{member.matric}</p>
                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                    export default About;