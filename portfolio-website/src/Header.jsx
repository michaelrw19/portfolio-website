export default function Header({anchors, links}) {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container" style={{maxWidth: "1000px"}}>
        <a className="navbar-brand fw-bold" href="#" style={{color: "#005c9d"}}>revcodes</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {anchors}
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
}
