import { useLocation, Link } from 'react-router-dom'
import PortfolioCard from './components/PortfolioCard'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import { useEffect, useState } from 'react'
// Assets
import ark from './assets/ark/ark.png'
import pos from './assets/pos/pos.png'
import website from './assets/portfolio.png'
import owl from './assets/owl.png'
import p5 from './assets/p5fighter.png'

function Portfolio() {
  const [project, setProject] = useState(null);

  /* Listen to request from Home.jsx to open a modal for a project */
  const { state } = useLocation();
  useEffect(() => {
    if (state?.project) {
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
                    <button className='btn btn-outline-primary rounded-2 me-2' onClick={() => {setProject('ark')}}>Learn More</button>
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
                    <button className='btn btn-outline-primary rounded-2 me-2' onClick={() => {setProject('pos')}}>Learn More</button>
                    <a className='btn btn-outline-dark rounded-2' href="https://github.com/michaelrw19/Point-of-Sale-Demo" target="_blank"><i className="bi bi-github"></i> Github</a>              
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
        <ProjectModal project={project} setProject={setProject}/>
      </div>
    </>
  )
}

export default Portfolio
