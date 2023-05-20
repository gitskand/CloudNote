import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Navabr() {

  const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem('token')
    navigate('/login')
  }

  let location = useLocation();
  useEffect(() => {



  }, [location])

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">CloudNote</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className={`nav-link $(location.pathname==="/"? "active": "")`} aria-current="page" to="/home">Home</Link> </li>

              <li className="nav-item">
                <Link className={`nav-link $(location.pathname==="/about"? "active": "")`} aria-current="page" to="/about">About</Link> </li>

            </ul>

            {!localStorage.getItem("token") ? <form className='d-flex'>

              <Link
                className="btn btn-primary btn-badge rounded-pill mx-2 custom-link-button"
                to="/login"
                role="button"

              >
                Login
              </Link>
              <Link
                className="btn btn-primary btn-badge rounded-pill mx-2 custom-link-button"
                to="/signup"
                role="button"

              >
                Signup
              </Link>
            </form> : <button onClick={handleLogout} className='btn btn-primary btn-badge rounded-pill '>Logout</button>}

          </div>
        </nav>


      </div>
    </>
  )
}
