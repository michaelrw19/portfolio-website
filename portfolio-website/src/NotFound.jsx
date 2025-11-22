import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'>
      <span className="fw-bold h1">404 Not Found</span>
      <span className="fw-light h2">Return to <Link to="/">homepage</Link></span>
    </div>
  );
}
