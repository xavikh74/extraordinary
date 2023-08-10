import React from 'react'
import BannerImg from '/templates/images/banner.png'
import Shadow from '/templates/images/shadow.png'
import Stars from '/templates/images/stars.png'
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <>
            <section className='banner-section position-relative'>
                <div className='container position-relative'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex align-align-items-center'>
                            <div className='banner-content'>
                                <div className=''>
                                    <h1 className='position-relative'>
                                        <span className='text-white clash-medium'>Discover <br />
                                            Collect, & sell</span>
                                        <br /> <span className='extra-ordinary-text clash-Semibold'>Extraordinary</span> <br />
                                        <span className='clash-medium text-white'>NFTs</span>
                                        <img src={Stars} className='banner-star d-lg-none d-block' alt='image' />
                                    </h1>
                                    <p className='text-start text-grey my-4 bannerp'>Lorem ipsum dolor sit amet consectetur. Proin lorem in nibh hac nullam. Habitant sit venenatis pharetra rhoncus viverra netus diam. Tempus amet.</p>
                                    <div className='d-flex gap-3'>
                                        <Button className='btn theme-btn' style={{ width: 130, fontSize: '14px' }}>Explore</Button>
                                        <Button className='btn theme-btn-white' style={{ width: 130, fontSize: '14px' }}>Create</Button>
                                    </div>
                                </div>
                                <img src={Stars} className='banner-star d-lg-block d-none' alt='image' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={BannerImg} className='banner-img' alt='image' />
                        </div>
                    </div>
                </div>
                <img src={Shadow} className='banner-shadow' alt="iamge" />
            </section>
        </>
    )
}

export default Banner