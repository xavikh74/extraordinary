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
                                <div>
                                    <h1 className=''>
                                        <span className='text-white clash-medium'>Discover <br />
                                            Collect, & sell</span>
                                        <br /> <span className='extra-ordinary-text clash-Semibold'>Extraordinary</span> <br />
                                        <span className='clash-medium text-white'>NFTs</span></h1>
                                    <p className='text-start text-grey'>Lorem ipsum dolor sit amet consectetur. Proin lorem in nibh hac nullam. Habitant sit venenatis pharetra rhoncus viverra netus diam. Tempus amet.</p>
                                    <div className='d-flex gap-3'>
                                        <Button className='btn theme-btn' style={{width:130,fontSize:'14px'}}>Explore</Button>
                                        <Button className='btn theme-btn-white' style={{width:130,fontSize:'14px'}}>Create</Button>
                                    </div>
                                </div>
                                <img src={Stars} className='banner-star' alt='image' />
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