import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from "/templates/images/logo.svg";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logo} className='logo' alt="image" /></a>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-5" id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto gap-5">
              <a className="nav-link active" aria-current="page" href="#">Marketplace</a>
              <a className="nav-link" href="#">Collection</a>
              <a className="nav-link" href="#">Community</a>
              <a className="nav-link" href="#">Create</a>
            </ul>
            <div className='w-mxc connect-btn'>
              <Button className='btn theme-btn'>Connect Wallet</Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header