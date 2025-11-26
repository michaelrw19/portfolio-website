import ExperienceCard from './ExperienceCard'
import ToolPill from './ToolPill'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Assets
import profilePicture from './assets/profile.jpg'
import ark from './assets/ark/ark.png'
import pos from './assets/pos/pos.png'

function Home() {
  const navigate = useNavigate();
  const triggerProjectModal = (key) => {
    navigate("/portfolio", { state: {project: key }});
  };

  const [experience, setExperience] = useState("cr18") 
  const experiences = {
    "cr18": {
      "title": "Application Developer",
      "period": "May 2025 - Present (Remote)",
      "company": "CR18 Delivery Service",
      "description": 'Built an end-to-end point-of-sale system for CR18 Delivery Service. Collaborated closely with the client to refine requirements, integrate feedback, and continuously add new features.',
      "achievements": ['Improved operational efficiency and reduced human error.', 'Added secure access control to increase security.', 'Integrated a receipt-printing feature.'],
      "tools": ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Python', 'Flask', 'SQLite', 'GitHub', 'Cypress', 'Excel', 'Pandas', 'OpenPyXL'],
      "skills": ['Problem Solving', 'Communication']
    },
    "wpy": {
      "title": "Full Stack Developer",
      "period": "Aug 2023 - Aug 2024",
      "company": "WhoPlusYou - Internship",
      "description": 'Learned new frameworks quickly, helped maintain and improve a large web application, and collaborated with senior developers and QA engineers to deliver reliable updates.',
      "achievements": ['Built an end-to-end admin dashboard to manage projects.', 'Refactored several pages to improve consistency and maintainability.', 'Improved page load times by optimizing and simplifying database queries.'],
      "tools": ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'PHP', 'Laravel', 'MySQL', 'Jira', 'GitHub', 'GitHub Actions', 'Sentry'],
      "skills": ['Problem Solving', 'Troubleshooting / Debugging', 'Communication']
    },
    "cibc": {
      "title": "Application Developer",
      "period": "May 2022 - August 2022",
      "company": "CIBC - Internship",
      "description": 'Gained exposure to TypeScript, Angular, Java, Spring Boot, Azure DevOps, and Docker. Improved test coverage with JUnit and supported daily Scrum stand-ups.',
      "achievements": [],
      "tools": ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Java', 'Spring Boot', 'JUnit', 'Azure DevOps', 'Docker'],
      "skills": ['Problem Solving', 'Communication']
    },    
  }
  const skills = [
    {
      title: 'Languages',
      items: [
        ['HTML5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
        ['CSS3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
        ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
        ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
        ['SQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'],
        ['TypeScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg']
      ]
    },

    {
      title: 'Frameworks and Libraries',
      items: [
        ['Vue', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'],
        ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
        ['Bootstrap', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
        ['ChartJS', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg'],
        ['Flask', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'],
        ['Pandas', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'],
        ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
        ['Express', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'],
        ['Cypress', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg']
      ]
    },

    {
      title: 'Tools',
      items: [
        ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
        ['Visual Studio Code', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'],
        ['Jira', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'],
        ['DB Browser', ''],
        ['Chrome DevTools', ''],
        ['Figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'],
        ['Penpot', '']
      ]
    },

    {
      title: 'Databases',
      items: [
        ['SQLite', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'],
        ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
        ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg']
      ]
    }
  ];


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
      <section id="about" className="first-section">
        <div className="container container-mw">
          <div className="d-flex gap-5">
            <img src={profilePicture} className="d-none d-md-block profile-picture" alt="Graduation Photo"/>
            <div>
              <div className='h2 d-flex flex-column' style={{fontFamily: "'FragmentMono-Reguler', sans-serif"}}>
                <span>Elevating</span> 
                <span>businesses through</span> 
                <span className="text-decoration-underline" style={{fontFamily: "'FragmentMono-Italic', sans-serif"}}>problem solving</span>
              </div>
              <p className='my-3'>
                <span className='highlight-text'>Full-Stack Developer</span> who builds custom tools—including point-of-sale systems, financial dashboards, and basic workflow automations—to<span className='highlight-text'> help small businesses solve real problems.</span>
              </p>
              <div className="d-flex gap-3 align-items-end">
                <a href="/Michael_Widianto_Resume.pdf" target="_blank" className="my-btn rounded-5 text-black gray-bg">View Resume</a>
                <a href="#projects" className="my-btn text-white blue-bg">View My Work</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-5">
        <div className="container container-mw">
          <h2 className="fw-bold mb-3">Skills</h2>
          <p className='gray-text mt-0'>My technical expertise and tools I work with: </p>
          <div className="row g-3">
            {skills.map((skill, _) => (
              <div className='col-12 col-sm-6' key={_}>
                <div className='h-100 p-3 shadow-md border rounded-3 bg-white'>
                  <h4 className='lh-1 text-center mb-3'>{skill.title}</h4>
                  <div className='d-flex flex-wrap gap-2'>
                    {skill.items.map((item, _) => (
                      <ToolPill key={_} src={item[1]} name={item[0]}/>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
      <section id="projects" className="py-5">
        <div className="container container-mw">
          <h2 className="fw-bold mb-3">Featured Works</h2>
          <div className="card h-100 shadow-md p-0 mb-4">
            <img src={ark} className="card-img-top"/>
            <div className="card-body">
              <div className="card-title d-flex flex-column gap-2">
                <h5 className="m-sm-0">Cash Flow Dashboard</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-start">
                  <ToolPill name="HTML5" show_anim={false}/>
                  <ToolPill name="CSS3" show_anim={false}/>
                  <ToolPill name="Bootstrap" show_anim={false}/>
                  <ToolPill name="JavaScript" show_anim={false}/>
                  <ToolPill name="Chart.js" show_anim={false}/>
                  <ToolPill name="Vue" show_anim={false}/>
                  <ToolPill name="Python" show_anim={false}/>
                  <ToolPill name="Flask" show_anim={false}/>
                  <ToolPill name="SQLite" show_anim={false}/>
                  <ToolPill name="Electron" show_anim={false}/>
                </div>
              </div>
              <p className="card-text">
                Built a desktop application for <a className='fst-italic' href="https://buildwithark.ca/" target='_blank'>Build With Ark</a> to track their revenue and expenses and instantly see whether they’re profitable. The app includes an easy-to-read dashboard with weekly, monthly, and quarterly views, plus simple forms to add transactions and export financial data to Excel.
              </p>
              <button className="btn btn-outline-primary rounded-2" onClick={() => triggerProjectModal("ark")}>See Demo Video</button>
            </div>
          </div>
          <div className="card h-100 shadow-md p-0">
            <img src={pos} className="card-img-top"/>
            <div className="card-body">
              <div className="card-title d-flex flex-column gap-2">
                <h5 className="m-sm-0">Point-Of-Sale Application</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-start">
                  <ToolPill name="HTML5" show_anim={false}/>
                  <ToolPill name="CSS3" show_anim={false}/>
                  <ToolPill name="JavaScript" show_anim={false}/>
                  <ToolPill name="Vue" show_anim={false}/>
                  <ToolPill name="Python" show_anim={false}/>
                  <ToolPill name="Flask" show_anim={false}/>
                  <ToolPill name="Bootstrap" show_anim={false}/>
                  <ToolPill name="SQLite" show_anim={false}/>
                </div>
              </div>
              <p className="card-text">
                Created a desktop application that replaces handwritten receipts and manual tracking for a mineral water delivery business. The system manages daily orders, driver assignments, product pricing, supplier details, and automatically generates daily and monthly sales summaries.
              </p>
              <button className="btn btn-outline-primary rounded-2" onClick={() => triggerProjectModal("pos")}>See Demo Video</button>
            </div>
          </div>
          <div className='mt-4 d-flex justify-content-center'>
            <Link to="/portfolio" style={{ textDecoration: "none"}} className="my-btn blue-bg text-white">View More Projects</Link>
          </div>
        </div>
      </section>
      <section id="experience" className="py-5">
        <div className="container container-mw">
          <h2 className="fw-bold mb-3">Work Experience</h2>
          <div className='d-flex gap-3 flex-sm-row flex-column'>
            <div className='d-flex flex-column gap-3' style={{minWidth: '250px'}}>
              { Object.entries(experiences).map((data, _) => (
                <ExperienceCard key={_} role={data[1].title} company={data[1].company} period={data[1].period} onClick={() => setExperience(data[0])} isSelected={experience == data[0]}/>
              ))}
            </div>
            <div className='flex-grow-1 border rounded-2 p-3 bg-white gray-border shadow-md'>
              <h6>Overview</h6>
              <p className='my-2'>{experiences[experience].description}</p>
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
                <h6>Skills and Tools</h6>
                <div className='d-flex flex-wrap gap-2'>
                  {experiences[experience].tools.map((item, _) => (
                    <span className='rounded-4 px-2 py-1 lh-1 gray-bg gray-text' style={{fontSize: '13px'}} key={_}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-5">
        <div className="container container-mw">
          <h2 className="fw-bold mb-2 text-center">Contact Me</h2>
          <p>I often work with <span className='highlight-text'>small businesses</span>, helping turn everyday challenges into <span className='highlight-text'>simple digital tools</span>, but I'm always open to new projects of any scale. If you’d like to explore an idea, feel free to reach out—<span className='highlight-text'>I’d love to chat.</span></p>
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
            <button className="mt-4 my-btn blue-bg text-white d-block mx-auto">Send Message</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home
