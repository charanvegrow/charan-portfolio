import './App.css';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <h1>Kummetha Sai Charan</h1>
          <h2>Product Manager – AI & Automation | Ex-SDE | IIT Kharagpur</h2>

          <div className="contact-info">
            <p>📍 Bengaluru, India</p>
            <p>📞 +91-9491320891 | ✉️ <a href="mailto:charan.arch@gmail.com">charan.arch@gmail.com</a></p>
            <p>🔗 <a href="https://linkedin.com/in/sai-charan-k" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://saicharankummetha.medium.com" target="_blank" rel="noopener noreferrer">Blog</a> | <a href="https://github.com/charanvegrow" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
        </div>

        <nav className="resume-nav">
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button
            className={activeSection === 'achievements' ? 'active' : ''}
            onClick={() => setActiveSection('achievements')}
          >
            Achievements
          </button>
        </nav>

        <div className="resume-content">
          {activeSection === 'about' && (
            <section className="about-section">
              <h3>Professional Summary</h3>
              <p>
                AI-native Product Manager with 4 years of experience, including 1 year in Product and 3 years in Engineering.
                Skilled in building scalable products across Conversational AI, Automation, Project Management & Supply Chain Technology.
                Former SDE turned PM, driving product strategy, rapid prototyping, and cross-functional execution.
                Passionate about building intelligent systems that not only reduce manual operations but also redefine conventional
                interfaces and applications—making them adaptive, efficient, and insight-driven.
              </p>
              <div className="interests">
                <h3>Interests</h3>
                <p>AI for operations, AI-Native SaaS platforms, Voice automation, PM+Tech hybrid leadership, Emerging market innovation</p>
              </div>
            </section>
          )}

          {activeSection === 'experience' && (
            <section className="experience-section">
              <h3>Product Management Experience</h3>

              <div className="job">
                <div className="job-header">
                  <h4>Product Manager | Vegrow (AI & Ops Automation)</h4>
                  <p className="job-period">July 2024 – Present | Bengaluru, India</p>
                </div>
                <ul>
                  <li>Spearheading AI-first product strategy across conversational AI, automation, and quality intelligence initiatives.</li>
                  <li>Built and scaled AI Calling Agents using LangChain + RAG, automating farmer engagement and feedback capture—reducing manual effort by 80% and increasing daily feedback coverage by 25%.</li>
                  <li>Shipped MVPs for AI-assisted calling, improving successful conversation rate from 60% to 80%+ through prompt optimization, A/B testing, and call tagging—doubling actionable insights.</li>
                  <li>Launched a Prompt Management System with versioning, model configs, and analytics—improving prompt iteration velocity by 4x.</li>
                  <li>Enhanced transcript post-processing with GPT, boosting sentiment-label match rate to 90%+ and enabling action routing to relevant teams.</li>
                  <li>Built a voice interaction system using Bland AI (with Indian number support) and OpenAI for structured JSON outputs, improving call reliability and connect rates.</li>
                  <li>Developed an internal RAG system to centralize policies and SOPs, streamlining cross-departmental knowledge access and reducing reliance on manual context sharing.</li>
                  <li>Created feedback loops and dashboards mapping implied vs explicit ratings, sentiment mismatches, and top vendor issues—accelerating vendor follow-ups by 40%.</li>
                  <li>Delivered a Digital Quality Reports module, saving 1000+ manhours/month and enabling computer vision integration.</li>
                  <li>Launched a unified Ops Portal for inventory tracking, material reconciliation, and predictive insights—boosting traceability across 30+ locations.</li>
                  <li>Balanced dual roles as Product Manager and Technical Lead, driving architecture decisions, building PoCs, and aligning cross-functional teams.</li>
                </ul>
              </div>

              <h3>Engineering Background</h3>

              <div className="job">
                <div className="job-header">
                  <h4>Software Development Engineer II | Vegrow</h4>
                  <p className="job-period">Apr 2023 – Jun 2024 | Bengaluru, India</p>
                </div>
                <ul>
                  <li>Led a team of 8 engineers while balancing feature delivery and architectural ownership.</li>
                  <li>Designed and implemented a QR microservice in Go using the Ports & Adapters pattern to manage inventory traceability, integrated with MongoDB and Kafka.</li>
                  <li>Built reusable, testable libraries for audit logging and common services to drive engineering consistency across teams.</li>
                  <li>Implemented Slack-integrated CI/CD workflows using GitHub Actions and Jenkins, improving pipeline visibility and reducing release cycles.</li>
                  <li>Championed developer productivity by improving unit test coverage and CI automation with mocks and dependency injection.</li>
                  <li>Played a pivotal role in company-wide tech initiatives including organizing hackathons, mentoring new hires, and improving developer onboarding documentation.</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h4>Software Development Engineer I | Vegrow</h4>
                  <p className="job-period">Oct 2022 – Mar 2023 | Bengaluru, India</p>
                </div>
                <ul>
                  <li>Developed a scalable inventory management system using Ruby on Rails and MySQL, optimized for warehouse-level ops.</li>
                  <li>Created a stateless, scalable OTP microservice using Golang and integrated it with Kaleyra SMS for customer communication.</li>
                  <li>Led DevOps transformation from AWS ECS to EKS, improving deployment efficiency and system reliability.</li>
                  <li>Participated in infrastructure enhancements such as Docker containerization and observability via Sentry and AWS CloudWatch.</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h4>Software Engineer | LivSYT</h4>
                  <p className="job-period">May 2021 – Oct 2022 | Hyderabad, India</p>
                </div>
                <ul>
                  <li>Worked on a construction SaaS platform with microservices in Node.js (TypeScript) and PostgreSQL.</li>
                  <li>Streamlined core workflow features using state machines and improved legacy systems via clean data migrations.</li>
                  <li>Implemented cron-based push notifications using AWS Lambda + CloudWatch and managed email communication with SES.</li>
                  <li>Designed after-DB triggers and an audit trail system for sensitive data operations.</li>
                  <li>Built a robust role-based access control system based on org-level hierarchies.</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h4>Computational Design Intern | Arth Design Build</h4>
                  <p className="job-period">Jan 2020 – Jun 2020 | Hyderabad, India</p>
                </div>
                <ul>
                  <li>Built generative design scripts using Dynamo and Python to automate architecture layouts in BIM tools.</li>
                  <li>Applied evolutionary algorithms to solve spatial layout optimization problems (e.g., parking design).</li>
                  <li>Presented R&D outputs to clients, bridging architectural design with computational logic.</li>
                </ul>
              </div>
            </section>
          )}

          {activeSection === 'skills' && (
            <section className="skills-section">
              <div className="skill-category">
                <h3>Product Management</h3>
                <p>PRD Specs, Metrics Design, Wireframing, AI Prompt Design, Product Roadmapping & Lifecycle Management, Jira, Agile & Scrum Methodologies, Model Evaluation Metrics, Data Annotation & Feedback Loops</p>
              </div>

              <div className="skill-category">
                <h3>GenAI & Model Integration</h3>
                <p>Prompt Engineering, Model Orchestration (OpenAI, Claude, Gemini, Mistral), LangChain, Whisper STT, RAG, Semantic Search, Pinecone, Token & Context Management, Post-processing Pipelines, A/B Testing, Use-case Fine-tuning, Model Context Protocol (MCP)</p>
              </div>

              <div className="skill-category">
                <h3>Engineering</h3>
                <p>Golang, Node.js, Python, Ruby on Rails, REST APIs, Kafka, Docker, Kubernetes, Jenkins, GitHub Actions</p>
              </div>

              <div className="skill-category">
                <h3>Databases</h3>
                <p>MySQL, PostgreSQL, MongoDB, Pinecone, Weaviate, FAISS, Qdrant, Redis (Vector & Cache), Elasticsearch (Hybrid Search)</p>
              </div>

              <div className="skill-category">
                <h3>Tools & Integrations</h3>
                <p>Figma, Postman, Slack APIs, and third-party integrations with platforms like Zoho, Twilio, Kaleyra</p>
              </div>
            </section>
          )}

          {activeSection === 'education' && (
            <section className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>IIT Kharagpur – Bachelors (Honors) in Architecture, 2021</h4>
                <p>Relevant Courses: Data Structures, Algorithms, AI Fundamentals</p>
                <p>Track: Entrepreneurship & Innovation</p>
              </div>
              <div className="education-item">
                <h4>Intermediate – Narayana Junior College, 2016</h4>
                <p>Score: 97%</p>
              </div>
              <div className="education-item">
                <h4>SSC – Dr. KKR's Gowtham School, 2014</h4>
                <p>Score: 9.7 CGPA</p>
              </div>
            </section>
          )}

          {activeSection === 'achievements' && (
            <section className="achievements-section">
              <h3>Achievements</h3>
              <ul>
                <li>Reduced manual QA hours by 1000+/month via Digital Quality Reports</li>
                <li>Scaled AI calling from MVP to 80%+ success rate with prompt improvements and infra</li>
                <li>Defined new metrics (like implied vs explicit sentiment match, tag accuracy scoring, success scoring across calls)</li>
                <li>Successfully led internal teams to adopt GenAI tools for productivity (e.g., Whisper + GPT audio transcript enrichment)</li>
                <li>Special Mention: All India Student Design Competition (HHAC), Hackathon Lead (Vegrow)</li>
                <li>Invited to Google Foobar Challenge – identified through Google's developer algorithm based on coding activity; recognized for problem-solving capabilities.</li>
              </ul>
            </section>
          )}
        </div>
      </header>

      <footer className="App-footer">
        <p>© 2025 Sai Charan Kummetha | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
