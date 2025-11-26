import { useLocation, Link } from 'react-router-dom'
import PortfolioCard from './components/PortfolioCard'
import ToolPill from './components/ToolPill'
import Header from './components/Header'
import Footer from './components/Footer'
import { Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
// Assets
import ark from './assets/ark/ark.png'
import arkDemo from './assets/ark/arkDemo.mp4'
import pos from './assets/pos/pos.png'
import posDemo from './assets/pos/pos.mp4'
import website from './assets/portfolio.png'
import owl from './assets/owl.png'
import p5 from './assets/p5fighter.png'

function Portfolio() {
  window.scrollTo(0, 0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [project, setProject] = useState("");
  const projectInfo = {
    "ark": {
      src: arkDemo,
      title: "Cash Flow Dashboard",
      tools: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "Chart.js",
        "Vue",
        "Python",
        "Flask",
        "SQLite",
        "Electron"
      ],
      description:
        "A desktop app made for Build With Ark to simplify financial tracking and give users a clear view of their cash flow.",
      features: [
        "Log income and expenses with a simple guided workflow",
        "Multiple viewing modes including weekly (1-7 or Mon-Sun), monthly, and quarterly (Calendar or Retail Year)",
        "Automatic summaries of revenue, expenses, and net income",
        "Customizable transaction categories and card accounts",
        "Exportable transaction history for reports or backups",
        "Responsive, consistent, and easy-to-use interface",
      ]
    },
    "pos": {
      src: posDemo,
      title: "Point-of-Sale Application",
      tools: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "Vue",
        "Cypress",
        "Python",
        "Flask",
        "Pandas",
        "SQLite",
      ],
      description:
        "A desktop POS system designed for a delivery business to streamline order entry, pricing, driver assignment, and daily reporting.",
      features: [
        "Create and manage orders for various delivery types based on vehicle selection",
        "Instantly generate sales summaries and driver delivery reports",
        "Create and manage purchases (resupply) with automatic summaries",
        "Export orders, purchases, and summaries to Excel",
        "Manage users, price lists, customers, and drivers with assigned vehicles",
        "Dynamic UI that adapts to user authentication and role-based permissions",
        "15 minute AFK timer that will automatically logs out user",
        "ESC/POS thermal receipt printing support"
      ]
    }
  };

  const { state }= useLocation();
  useEffect(() => {
    if (state?.project) {
      handleShow();
      setProject(state.project);
    }
  }, [state]);

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
                src={website}
                title="Personal Website"
                tags={['Project']}
                description={
                  <><p className="card-text">A responsive React website built with modern UI principles and deployed on Vercel.</p></>
                }
                buttons={
                  <>
                    <Link to="/" className="btn btn-outline-primary rounded-2 me-2">View</Link>
                    <a className='btn btn-outline-dark rounded-2' href="https://github.com/michaelrw19/portfolio-website" target="_blank"><i className="bi bi-github"></i> Github</a> 
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
                    <a className='btn btn-outline-dark rounded-2' href="https://github.com/michaelrw19/mobile-ui-ux" target="_blank"><i className="bi bi-github"></i> Github</a>              
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
