import { Modal } from 'react-bootstrap'
import ToolPill from './ToolPill'
import { featuredProjectInfo } from '../data/featuredProjectInfo'
import { useEffect, useState } from 'react'

export default function ProjectModal({project, setProject}) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProject(null);
  }
  // Listen to modal show request by parent
  useEffect(() => {
    if (project && featuredProjectInfo[project]) {
      setShow(true);
    }
  }, [project]);

  // Close project modal using back button in mobile
  useEffect(() => {
    if (show) {
      // Push a state so back button closes it
      window.history.pushState({ dropdown: true }, "");
    }
    const handleBackButton = (event) => {
      // If dropdown is open, close it instead of going back
      if (show) {
        handleClose();
        event.preventDefault();
      }
    };

    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className='p-4'>
      <Modal.Header closeButton className='border-0'>
        <Modal.Title>{featuredProjectInfo[project]?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-0'>
        <video 
          src={featuredProjectInfo[project]?.src}
          controls muted loop disablePictureInPicture
          controlsList='nodownload'
          className="card-img-top"
        ></video>
        <div className='p-3'>
          <p>{featuredProjectInfo[project]?.description}</p>
          <div>
            <span className='highlight-text'>Key features: </span>
            <ul>
              { featuredProjectInfo[project]?.features.map((feature, _) => (
                <li key={_}>{feature}</li>
              )) }
            </ul>
          </div>
          <div>
            <span className='highlight-text'>Technologies: </span>
            <div className="mt-1 d-flex flex-wrap gap-2 justify-content-start">
              { featuredProjectInfo[project]?.tools.map((tool, _) => (
                <ToolPill name={tool} show_anim={false} key={_}/>
              )) }
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
