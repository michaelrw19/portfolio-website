import profilePicture from './assets/profile.jpg'
import projectShowcase1 from './assets/test.mp4'
import ExperienceCard from './ExperienceCard'
import ToolBadge from './ToolBadge'
import Header from './Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [experience, setExperience] = useState("cr18") 
  const experiences = {
    "cr18": {
      "title": "Application Developer",
      "period": "May 2025 - Present",
      "company": "CR18 Delivery Service",
      "description": 'Built an end-to-end point-of-sale system for CR18 Delivery Service. Collaborated closely with the client to refine requirements, integrate feedback, and continuously add new features.',
      "achievements": ['Improved operational efficiency and reduced human error.', 'Added secure access control to increase security.', 'Integrated a receipt-printing feature.'],
      "tools": ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Python', 'Flask', 'SQLite', 'GitHub', 'Cypress', 'Excel', 'Pandas', 'OpenPyXL'],
      "skills": ['Problem Solving', 'Communication']
    },
    "wpy": {
      "title": "Full Stack Developer Intern",
      "period": "Aug 2023 - Aug 2024",
      "company": "WhoPlusYou",
      "description": 'Learned new frameworks quickly, helped maintain and improve a large web application, and collaborated with senior developers and QA engineers to deliver reliable updates.',
      "achievements": ['Built an end-to-end admin dashboard to manage projects.', 'Refactored several pages to improve consistency and maintainability.', 'Improved page load times by optimizing and simplifying database queries.'],
      "tools": ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'PHP', 'Laravel', 'MySQL', 'Jira', 'GitHub', 'GitHub Actions', 'Sentry'],
      "skills": ['Problem Solving', 'Troubleshooting / Debugging', 'Communication']
    },
    "cibc": {
      "title": "Application Developer Intern",
      "period": "May 2022 - August 2022",
      "company": "CIBC",
      "description": 'Gained exposure to TypeScript, Angular, Java, Spring Boot, Azure DevOps, and Docker. Improved test coverage with JUnit and supported daily Scrum stand-ups.',
      "achievements": [],
      "tools": ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Java', 'Spring Boot', 'JUnit', 'Azure DevOps', 'Docker'],
      "skills": ['Problem Solving', 'Communication']
    },    
  }
  const skills = [
    {
      "title": 'Languages',
      "items": ['HTML5', 'CSS3', 'JavaScript', 'Python', 'SQL', 'TypeScript']
    },
    {
      "title": 'Frameworks',
      "items": ['Vue', 'React', 'Flask', 'Pandas', 'OpenPyXL', 'Node.js', 'Express', 'Bootstrap', 'Cypress']
    },
    {
      "title": 'Tools',
      "items": ['GitHub', 'Visual Studio Code', 'Jira', 'DB Browser', 'Chrome DevTools', 'Figma', 'Penpot']
    },
    {
      "title": 'Databases',
      "items": ['SQLite', 'MySQL', 'PostgreSQL']      
    }
  ]

  return (
    <>
      <Header 
        anchors={
          <>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Featured Works</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>  
          </>        
        }
        links={
          <>
            <li className="nav-item ms-lg-5">
              <Link to="/portfolio" style={{ textDecoration: "none"}} className="nav-link">Portfolio</Link>
            </li>
          </>
        }
      />
      <section id="about" className="pt-5 mt-5">
        <div className="container">
          <h2 className="fw-bold mb-2">About Me</h2>
          <div className="d-flex gap-4">
            <img src={profilePicture} className="d-none d-lg-block rounded" style={{float: "left", maxWidth: "250px", height: "375px"}} alt="Graduation Photo"/>
            <div>
              <h3>Michael Revi Widianto</h3>
              <p>
                I’m a <span className='fw-bold'>Full-Stack Developer</span> who enjoys turning real business problems into simple, effective software. After graduating from Toronto Metropolitan University in 2025, I’ve been actively seeking full-time opportunities while <span className='fw-bold'>building custom tools for small businesses</span>—including point-of-sale systems, financial dashboards, and basic workflow automation solutions.
              </p>
              <div className="d-flex flex-column gap-2">
                <a href="/Michael_Widianto_Resume.pdf" target="_blank" className="btn border text-white me-auto" style={{backgroundColor: "#97a1aa" }}>View My Resume</a>
                <div>
                  <a href="https://www.linkedin.com/in/michaelrw19/" target="_blank" style={{ color: "#0072B1" }} className='me-3 me-sm-2'>
                    <i className="bi bi-linkedin icon-size"></i>
                  </a>
                  <a href="https://github.com/michaelrw19" target="_blank">
                    <i className="bi bi-github text-black icon-size"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="pt-5">
        <div className="container">
          <h2 className="fw-bold mb-2">Skills</h2>
          <p className='text-secondary mt-0'>My technical expertise and tools I work with: </p>
          <div className="row g-3">
            {skills.map((skill, _) => (
              <div className='col-12 col-sm-6' key={_}>
                <div className='p-3 border rounded-3 h-100'>
                  <h4 className='lh-1 text-center mb-3'>{skill.title}</h4>
                  <div className='d-flex flex-wrap gap-2'>
                    {skill.items.map((item, _) => (
                      <span className='border rounded-4 px-2 py-1 lh-1 ' style={{fontSize: '13px'}} key={_}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
      <section id="projects" className="pt-5">
        <div className="container">
          <h2 className="fw-bold mb-2">Featured Works</h2>
          <div className="card h-100 shadow-sm p-0 mb-4">
            <video 
              src={projectShowcase1}
              autoPlay loop muted playsInline
              className="card-img-top"
            ></video>
            <div className="card-body">
              <div className="card-title d-flex flex-column gap-2">
                <h5 className="fw-bold m-sm-0">Cash Flow Dashboard</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-start">
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" name="HTML5"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" name="CSS3"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" name="JavaScript"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" name="Vue"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" name="Python"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" name="Flask"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" name="Bootstrap"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" name="SQLite"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" name="Electron"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" name="Figma"/>
                </div>
              </div>
              <p className="card-text">
                Built a desktop application for Build With Ark to track their revenue and expenses and instantly see whether they’re profitable. The app includes an easy-to-read dashboard with weekly, monthly, and quarterly views, plus simple forms to add transactions and export financial data to Excel.
              </p>
            </div>
          </div>
          <div className="card h-100 shadow-sm p-0">
            <video 
              src={projectShowcase1}
              autoPlay loop muted playsInline
              className="card-img-top"
            ></video>
            <div className="card-body">
              <div className="card-title d-flex flex-column gap-2">
                <h5 className="fw-bold m-sm-0">Point-Of-Sale Application</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-start">
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" name="HTML5"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" name="CSS3"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" name="JavaScript"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" name="Vue"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" name="Python"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" name="Flask"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" name="Bootstrap"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" name="SQLite"/>
                </div>
              </div>
              <p className="card-text">
                Created a desktop application that replaces handwritten receipts and manual tracking for a mineral water delivery business. The system manages daily orders, driver assignments, product pricing, supplier details, and automatically generates daily and monthly sales summaries.
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a href="portfolio.html" className="btn btn-primary">See More Projects</a>
          </div>
        </div>
      </section>
      <section id="experience" className="pt-5">
        <div className="container">
          <h2 className="fw-bold mb-2">Work Experience</h2>
          <div className='d-flex gap-3 flex-sm-row flex-column'>
            <div className='d-flex flex-column gap-3' style={{minWidth: '250px'}}>
              <ExperienceCard role="Application Developer" company="CR18 Delivery Service" period="May 2025 - Present" onClick={() => setExperience("cr18")} isSelected={experience == "cr18"}/>
              <ExperienceCard role="Full Stack Developer" company="WhoPlusYou" period="Aug 2023 - Aug 2024" onClick={() => setExperience("wpy")} isSelected={experience == "wpy"}/>
              <ExperienceCard role="Application Developer" company="CIBC" period="May 2022 - Aug 2022" onClick={() => setExperience("cibc")} isSelected={experience == "cibc"}/>
            </div>
            <div className='flex-grow-1 border rounded-2 p-3'>
              <div className='d-flex flex-column justify-content-between'>
                <h5 className='m-0 fw-bold'>{experiences[experience].title}</h5>
                <h6 className='text-secondary mt-1 mb-0'>{experiences[experience].period}</h6> {/* show on > sm */}
              </div>
              <h6 className='text-secondary my-1'>{experiences[experience].company}</h6>
              <p className='my-3'>{experiences[experience].description}</p>
              { experiences[experience].achievements.length > 0 ? (
                <div>
                  <h6>Key achievements</h6>
                  <ul>
                    {experiences[experience].achievements.map((item, _) => (
                      <li key={_}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null }
              <div>
                <h6>Tools and Skills</h6>
                <div className='d-flex flex-wrap gap-2'>
                  {experiences[experience].tools.map((item, _) => (
                    <span className='border rounded-4 px-2 py-1 lh-1' style={{fontSize: '13px'}} key={_}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-2 text-center">Contact Me</h2>
          <p className="text-secondary">I often work with <span className='fw-bold'>small businesses</span>, helping turn everyday challenges into <span className='fw-bold'>simple digital tools</span>, but I'm always open to new projects of any scale. If you’d like to explore an idea, feel free to reach out—<span className='fw-bold'>I’d love to chat.</span></p>
          <form className="mx-auto">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary d-block mx-auto">Send Message</button>
          </form>
          <div id="contactStatus" className="mt-3 text-center"></div>
        </div>
      </section>
      <footer className="py-4 text-center bg-light">
        <p className="mb-0">&copy; 2025 revcodes. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home
