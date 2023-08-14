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
          <div className="collapse navbar-collapse gap-4" id="basic-navbar-nav">
            <div className='navbar-nav ms-auto gap-3'>
              <p className='mb-0 text-white poppins' style={{ fontWeight: 600 }}>VoldemortTrumpRobotnik-10Neko</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 38 29" fill="none">
                <path d="M32.1633 2.43149C29.7043 1.3047 27.0854 0.474437 24.3266 0C23.9867 0.593046 23.5869 1.40354 23.327 2.05589C20.4082 1.62099 17.5094 1.62099 14.6506 2.05589C14.3707 1.40354 13.9709 0.593046 13.631 0C10.8722 0.474437 8.25328 1.3047 5.7943 2.43149C0.836369 9.82479 -0.503073 17.0402 0.156652 24.137C3.45528 26.5685 6.63395 28.0314 9.77264 29C10.5523 27.9523 11.232 26.8255 11.8318 25.6592C10.6923 25.244 9.61271 24.7103 8.59314 24.0975C8.87302 23.8998 9.13291 23.6824 9.3928 23.4847C15.6502 26.3708 22.4273 26.3708 28.6048 23.4847C28.8647 23.7021 29.1246 23.8998 29.4044 24.0975C28.3849 24.7103 27.2853 25.2243 26.1658 25.6592C26.7655 26.8255 27.4453 27.9523 28.2249 29C31.3636 28.0314 34.5623 26.5685 37.8409 24.137C38.6206 15.8937 36.5015 8.75731 32.2033 2.43149H32.1633ZM12.6714 19.788C10.7922 19.788 9.25286 18.0682 9.25286 15.953C9.25286 13.8378 10.7522 12.118 12.6714 12.118C14.5906 12.118 16.11 13.8378 16.09 15.953C16.09 18.0484 14.5906 19.788 12.6714 19.788ZM25.2862 19.788C23.4069 19.788 21.8676 18.0682 21.8676 15.953C21.8676 13.8378 23.367 12.118 25.2862 12.118C27.2054 12.118 28.7247 13.8378 28.7047 15.953C28.7047 18.0484 27.2054 19.788 25.2862 19.788Z" fill="#7E41FF" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="none">
                <path d="M16 0C12.8356 0 9.74206 0.938379 7.11088 2.69648C4.4797 4.45458 2.42894 6.95343 1.21794 9.87705C0.00693905 12.8006 -0.309922 16.0178 0.307438 19.1214C0.924799 22.2252 2.44866 25.076 4.6863 27.3138C6.92394 29.5514 9.77486 31.0752 12.8786 31.6926C15.9822 32.31 19.1994 31.993 22.123 30.782C25.0466 29.571 27.5454 27.5204 29.3036 24.8892C31.0616 22.258 32 19.1646 32 16C32 11.7565 30.3142 7.68687 27.3138 4.6863C24.3132 1.6857 20.2434 0 16 0ZM23.86 10.96L21.24 23.34C21.04 24.22 20.52 24.42 19.78 24.02L15.78 21.06L13.78 22.92C13.6858 23.043 13.5648 23.143 13.4262 23.2124C13.2876 23.2816 13.135 23.3184 12.98 23.32L13.26 19.32L20.66 12.62C21 12.34 20.66 12.18 20.18 12.46L11.1 18.16L7.1 16.92C6.24 16.66 6.22 16.06 7.28 15.66L22.7 9.65999C23.46 9.43999 24.1 9.87999 23.86 10.96Z" fill="#0A89FF" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28 22" fill="none">
                <path d="M28 1.375V6.875L14 12.375L0 6.875V1.375C0 1.01033 0.1475 0.660591 0.41005 0.402728C0.672601 0.144866 1.0287 0 1.4 0H26.6C26.9713 0 27.3274 0.144866 27.59 0.402728C27.8525 0.660591 28 1.01033 28 1.375ZM0 9.83675V20.625C0 20.9897 0.1475 21.3394 0.41005 21.5973C0.672601 21.8551 1.0287 22 1.4 22H26.6C26.9713 22 27.3274 21.8551 27.59 21.5973C27.8525 21.3394 28 20.9897 28 20.625V9.83675L14 15.3368L0 9.83675Z" fill="#FF994F" />
              </svg>
            </div>
            {/* <ul className="navbar-nav ms-auto gap-5">
              <a className="nav-link active" aria-current="page" href="#">Marketplace</a>
              <a className="nav-link" href="#">Collection</a>
              <a className="nav-link" href="#">Community</a>
              <a className="nav-link" href="#">Create</a>
            </ul> */}
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