const teamMembers = [
  { name: "Tiamiyu Kabirat Anike", role: "Lead Developer", matric: "LCU/UG/24/33609" },
  { name: "Odebunmi Oyinkansola Iyanuoluwa", role: "Frontend Developer", matric: "LCU/UG/24/30427" },
  { name: "Edebiri-Billy Omosivie Gabriel", role: "UI Designer", matric: "LCU/UG/24/31222" },
  { name: "Ajao Emmanuel Olaoluwa", role: "React Developer", matric: "LCU/UG/24/34555" },
  { name: "Adelabu Samuel Fikayo", role: "React Developer", matric: "LCU/UG/24/30950" },
  { name: "Imatobhebhe Gospel", role: "UI Designer", matric: "LCU/UG/24/32755" },
  { name: "Ibekwe Kelechi", role: "Frontend Developer", matric: "LCU/UG/24/32375" },
  { name: "Olutimehin Ayodeji Onaopemipo", role: "React Developer", matric: "LCU/UG/24/29534" },
  { name: "Igbo Victor Ifeanyi", role: "Documentation", matric: "LCU/UG/24/31162" },
  { name: "Oluade Ismail", role: "Documentation", matric: "LCU/UG/24" },
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
