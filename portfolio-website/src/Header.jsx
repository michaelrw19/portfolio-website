import { Link } from 'react-router-dom'
import logo from './assets/logo.png'

export default function Header({anchors, links}) {
  return (
    <nav className="base-background navbar navbar-expand-md shadow-sm fixed-top" style={{zIndex: 1}}>
      <div className="container" style={{maxWidth: "1000px"}}>
        <Link to="/" style={{ textDecoration: "none" }} className="navbar-brand">
          <img src={logo} height={25}/>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex gap-md-4">
            {anchors}
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
}
