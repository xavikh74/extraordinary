import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import cardImg1 from '/templates/images/vector1.svg'
import cardImg2 from '/templates/images/vector2.svg'
import cardImg3 from '/templates/images/vector3.svg'
import cardImg4 from '/templates/images/vector4.svg'
import cardImg5 from '/templates/images/vector5.svg'
import cardImg6 from '/templates/images/vector6.svg'
import cardImg7 from '/templates/images/vector7.svg'
import cardImg8 from '/templates/images/vector8.svg'
import cardImg9 from '/templates/images/vector9.svg'
import cardImg10 from '/templates/images/vector10.svg'
import cardImg11 from '/templates/images/vector11.svg'
import cardImg12 from '/templates/images/vector12.svg'
import nftShadow from '/templates/images/shadow-card.png'
import nftShadow2 from '/templates/images/shadow2.png'

const NftInformation = () => {  
    return (
        <>
            <section className='nft-section'>
                <Container>
                    <div className='row justify-content-between align-align-items-center'>
                        <div className='text-start w-mxc'>
                            <h2><span className='text-white mb-0'>NFT</span> <span className='text-red'>Information</span></h2>
                            <p className='text-white fs-4' style={{fontWeight:200}}>Checkout Top Rated Creators On The NFT Marketplace</p>
                        </div>
                        <div className='w-mxc d-flex align-items-center'>
                            <Button className='btn theme-btn' style={{ width: 140, fontSize: '16px' }}>Explore More</Button>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='row justify-content-between nft-row py-5'>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg1} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                1
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg2} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                2
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg3} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                3
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg4} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                4
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg5} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                5
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg6} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                6
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg7} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                7
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg8} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                8
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg9} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                9
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg10} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                10
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg11} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                11
                            </div>
                        </div>
                        <div className='nft-box'>
                            <div className='nft-image'>
                                <img src={cardImg12} alt="image" />
                            </div>
                            <div className='nft-content'>
                                <h5>NFT Name</h5>
                                <p className='d-flex gap-2 mb-0 mx-auto w-mxc'><span className='text-grey2'>Total Sales:</span><span className='text-white'>34.53 ETH</span></p>
                            </div>
                            <div className='nft-count'>
                                12
                            </div>
                        </div>
                    </div>
                </Container>
                <img src={nftShadow} className='nft-card-shadow' alt="image" />
                <img src={nftShadow2} className='nft-card-shadow2' alt="image" />
            </section>
        </>
    )
}

export default NftInformation