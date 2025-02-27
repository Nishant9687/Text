import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
     {/* Navbar */}
     
     <nav className={`navbar navbar-expand-lg navabr-${props.mode} bg-${props.mode} text-light`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.t}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
               <a className="nav-link active" aria-current="page" href="/">{props.d}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.e}</a>
              </li>
              <li className="nav-item">
              <Link to="/componts/Disable">Disable</Link> 
             </li>
              <li className="nav-item">
              <Link to="/componts/About">About</Link> 
              { /* <link className="nav-link "to="About.jsx" aria-disabled="true">about</link> */}
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>*/}
            <div className="form-check form-switch text-light">
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode </label>
              </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ marginTop: '70px', padding: '20px' }}>
        <h1>Welcome to Textutils</h1>
        <p>This is a sample application to demonstrate a fixed navbar.</p>
      </div>
      {/* content */}
    </>
  )
}
