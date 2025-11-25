import { Link } from 'react-router-dom'
import PortfolioCard from './PortfolioCard'
import ToolPill from './ToolPill'
import Header from './Header'
import Footer from './Footer'
import { Modal } from 'react-bootstrap'
import ark from './assets/ark.png'
import pos from './assets/pos.png'
import owl from './assets/owl.png'
import p5 from './assets/p5fighter.png'

import projectShowcase1 from './assets/test.mp4'

import { useState } from 'react'

function Portfolio() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [project, setProject] = useState("");
  const projectInfo = {
    "ark": {
      src: projectShowcase1,
      title: "Cash Flow Dashboard",
      tools: [
        "React",
        "Electron",
        "Node.js",
        "Express",
        "Prisma",
        "SQLite",
        "Chart.js"
      ],
      description:
        "A desktop app built for Build With Ark to simplify financial tracking and give users a clear view of their cash flow.",
      features: [
        "Log income and expenses with a guided interface",
        "Quarter-based financial breakdown",
        "Automatic summaries showing revenue, spending, and net balance",
        "Exportable transaction history",
        "Data validation for cleaner records",
        "Responsive and consistent UI design"
      ]
    },
    "pos": {
      src: projectShowcase1,
      title: "Point-of-Sale Application",
      tools: [
        "Vue 3",
        "Composition API",
        "Flask",
        "Python",
        "SQLite",
        "Electron",
        "Bootstrap",
        "ESC/POS"
      ],
      description:
        "A desktop POS system designed for a delivery business to streamline order entry, pricing, driver assignment, and daily reporting.",
      features: [
        "Order creation with automatic delivery fee calculations",
        "Driver assignment with collision-prevention logic",
        "Support for cash, transfer, and mixed payments",
        "Daily and monthly reporting with Excel export",
        "Offline-first local SQLite database",
        "User authentication and role-based permissions",
        "ESC/POS thermal receipt printing"
      ]
    }
  };


  return (
    <>
      <div className='vh-100 d-flex flex-column'>
        <Header 
          links={
            <>
              <li className="nav-item ms-lg-5">
                <Link to="/" style={{ textDecoration: "none" }} className="nav-link">Home</Link>
              </li>
            </>
          }
        />
        <section className="flex-grow-1 mt-5 py-5">
          <div className="container px-4" style={{maxWidth: "1000px"}}>
            <div className="row row-cols-1 row-cols-md-2 g-5">
              <PortfolioCard 
                src={ark}
                title="Cash Flow Dashboard"
                tags={['Freelance Work']}
                description={
                  <><p className="card-text">A desktop app built for <a className='fst-italic' href="https://buildwithark.ca/" target='_blank'>Build With Ark</a> to simplify financial tracking and give users a clear view of their cash flow.</p></>
                }
                buttons={
                  <>
                    <button className='btn btn-outline-primary rounded-2 me-2' onClick={() => {handleShow(); setProject('ark')}}>Learn More</button>
                  </>
                }
              />            
              <PortfolioCard 
                src={pos}
                title="Point-of-Sale Application"
                tags={['Project']}
                description={
                  <><p className="card-text">A desktop POS system designed to streamline delivery order management.</p></>
                }
                buttons={
                  <>
                    <button className='btn btn-outline-primary rounded-2 me-2' onClick={() => {handleShow(); setProject('pos')}}>Learn More</button>
                    <a className='btn btn-outline-dark rounded-2 me-2'><i className="bi bi-github"></i> Github</a>              
                  </>
                }
              />              
              <PortfolioCard 
                src={owl}
                title="UI/UX High Fidelity"
                tags={['Coursework']}
                description={
                  <><p className="card-text">A full mobile redesign of <span className='fst-italic'>The Famous Owls of Minerva</span> website, focused on a cleaner interface and a smoother user experience.</p></>
                }
                buttons={
                  <>
                    <a className='btn btn-outline-primary rounded-2 me-2' href="https://design.penpot.app/#/view?file-id=14b4ef9d-aa9c-815a-8005-e6509449d37c&page-id=14b4ef9d-aa9c-815a-8005-e6509449d37d&section=interactions&index=0&interactions-mode=show&share-id=1379938b-a15b-8002-8005-fec66a81e5b6." target="_blank">View</a>
                    <a className='btn btn-outline-dark rounded-2 me-2' href="https://github.com/michaelrw19/mobile-ui-ux" target="_blank"><i className="bi bi-github"></i> Github</a>              
                  </>
                }
              />   
              <PortfolioCard 
                src={p5}
                title="p5 Fighter"
                tags={['Coursework']}
                description={
                  <><p className="card-text">A fast-paced 2D fighting game built with JavaScript and the p5play framework.</p></>
                }
                buttons={
                  <>
                    <a className='btn btn-outline-primary rounded-2 me-2' href="https://michaelrw19.github.io/p5-Fighter" target="_blank">Play</a>
                    <a className='btn btn-outline-dark rounded-2' href="https://github.com/michaelrw19/p5-Fighter" target="_blank"><i className="bi bi-github"></i> GitHub</a>                  
                  </>
                }
              />
            </div>
          </div>
        </section>      
        <Footer/>
        <Modal show={show} onHide={handleClose} centered size="lg" className='p-4'>
          <Modal.Header closeButton className='border-0'>
            <Modal.Title>{projectInfo[project]?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='p-0'>
            <video 
              src={projectInfo[project]?.src}
              controls muted loop disablePictureInPicture
              controlsList='nodownload'
              className="card-img-top"
            ></video>
            <div className='p-3'>
              <p>{projectInfo[project]?.description}</p>
              <div>
                <span className='highlight-text'>Key features: </span>
                <ul>
                  { projectInfo[project]?.features.map((feature, _) => (
                    <li key={_}>{feature}</li>
                  )) }
                </ul>
              </div>
              <div>
                <span className='highlight-text'>Technologies: </span>
                <div className="mt-1 d-flex flex-wrap gap-2 justify-content-start">
                  { projectInfo[project]?.tools.map((tool, _) => (
                    <ToolPill name={tool} show_anim={false} key={_}/>
                  )) }
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default Portfolio
