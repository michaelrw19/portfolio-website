import { Link } from 'react-router-dom'
import ToolBadge from './ToolBadge'
import Header from './Header'
import projectShowcase1 from './assets/test.mp4'

function Portfolio() {
  return (
    <>
      <Header 
        links={
          <>
            <li className="nav-item ms-lg-5">
              <Link to="/" style={{ textDecoration: "none" }} className="nav-link">Home</Link>
            </li>
          </>
        }
      />
      <section id="projects" className="pt-5 mt-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Featured Works</h2>
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
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" name="SQLite"/>
                  <ToolBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" name="Electron"/>
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
      <footer className="py-4 text-center bg-light">
        <p className="mb-0">&copy; 2025 revcode. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Portfolio
