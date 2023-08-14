import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Nft1 from '/templates/images/nft1.png';
import Nft2 from '/templates/images/nft2.png';
import eth from '/templates/images/eth.svg';
import circle from '/templates/images/circle.svg';
import bgStack from '/templates/images/stack-blur.png';

const Stacking = () => {

    const [activeToggle, setActiveToggle] = useState(1)

    return (
        <>
            <section className='stacking' style={{ backgroundImage: `url('${bgStack}')`, backgroundSize: '50%', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
                <Container>
                    <div className='d-flex justify-content-lg-between justify-content-center'>
                        <div className='nft-box4 text-center px-0'>
                            <img src={Nft1} className='img-fluid' alt="image" />
                        </div>
                        <div className='nft-box-form'>
                            <h2 style={{fontSize:'33px'}}><span className='text-white'>Purchase VoldemortTrumpRobotnik
                                -10Neko ETHEREUM on </span> <span className='text-red'>Uniswap</span></h2>
                            <div className='nft-form-box'>
                                <div className='toggle-form d-flex align-items-center justify-content-between'>
                                    <div className='toggle-button'>
                                        <Button className={`${activeToggle == 1 ? 'active-toggle' : ''}`} onClick={() => setActiveToggle(1)}>Swap</Button>
                                        <Button className={`${activeToggle == 2 ? 'active-toggle' : ''}`} onClick={() => setActiveToggle(2)}>Buy</Button>
                                    </div>
                                    <p className='mb-0 text-grey3 fw-bold'>
                                        Flooz: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                            <path d="M6.18505 12.2662L7.11255 15.1368C7.12038 15.1619 7.13601 15.1837 7.15714 15.1993C7.17828 15.2148 7.20382 15.2232 7.23005 15.2232C7.25627 15.2232 7.28181 15.2148 7.30295 15.1993C7.32409 15.1837 7.33971 15.1619 7.34755 15.1368L8.27505 12.2662C8.51795 11.5124 8.93669 10.8271 9.49668 10.267C10.0567 9.70688 10.7419 9.28801 11.4957 9.04496L14.3669 8.11746C14.392 8.10962 14.4138 8.094 14.4294 8.07286C14.4449 8.05173 14.4533 8.02619 14.4533 7.99996C14.4533 7.97373 14.4449 7.94819 14.4294 7.92705C14.4138 7.90592 14.392 7.8903 14.3669 7.88246L11.4957 6.95496C10.742 6.71192 10.0568 6.29313 9.49685 5.73315C8.93687 5.17317 8.51808 4.48805 8.27505 3.73433L7.34755 0.862458C7.33971 0.837429 7.32409 0.815557 7.30295 0.800027C7.28181 0.784498 7.25627 0.776123 7.23005 0.776123C7.20382 0.776123 7.17828 0.784498 7.15714 0.800027C7.13601 0.815557 7.12038 0.837429 7.11255 0.862458L6.18505 3.73371C5.94195 4.48749 5.52306 5.17266 4.96297 5.73264C4.40287 6.29263 3.71763 6.71138 2.9638 6.95433L0.0931708 7.88246C0.0681419 7.8903 0.0462695 7.90592 0.0307401 7.92705C0.0152107 7.94819 0.00683594 7.97373 0.00683594 7.99996C0.00683594 8.02619 0.0152107 8.05173 0.0307401 8.07286C0.0462695 8.094 0.0681419 8.10962 0.0931708 8.11746L2.96442 9.04496C3.71801 9.28842 4.40298 9.70743 4.96292 10.2675C5.52285 10.8275 5.94173 11.5126 6.18505 12.2662Z" fill="#727288" />
                                        </svg> Not connected
                                    </p>
                                </div>
                                <div className='nft-input-group mt-5 pt-3 text-start'>
                                    <label htmlFor="">You pay</label>
                                    <div className='nft-input'>
                                        <input type="text" placeholder='0.00' />
                                        <div className='nft-st px-3'>
                                            <img src={eth} className='img-fluid' alt="image" />
                                            <span className='me-1'>ETH</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_11_2602)">
                                                    <path d="M8.45762 1.11465L9.55362 0.554654C10.0585 0.296876 10.6701 0.503987 10.9341 1.02399L11.5056 2.14843C11.6567 2.44532 11.9305 2.65243 12.2478 2.7111L13.4487 2.93065C14.0034 3.03288 14.3803 3.57421 14.3021 4.15732L14.1305 5.41688C14.108 5.58018 14.1219 5.74643 14.171 5.90377C14.2202 6.06111 14.3035 6.20566 14.415 6.3271L15.2621 7.24265C15.6532 7.66399 15.6532 8.3351 15.2621 8.75732L14.4141 9.67288C14.3028 9.79439 14.2196 9.93897 14.1706 10.0963C14.1216 10.2536 14.1079 10.4199 14.1305 10.5831L14.3021 11.8435C14.3803 12.4249 14.0034 12.9671 13.4487 13.0693L12.2478 13.2889C11.9305 13.3475 11.6567 13.5555 11.5056 13.8515L10.9341 14.976C10.6701 15.4951 10.0594 15.7022 9.55362 15.4444L8.45851 14.8853C8.31659 14.8125 8.15937 14.7745 7.99985 14.7745C7.84032 14.7745 7.6831 14.8125 7.54118 14.8853L6.44607 15.4453C5.94118 15.7031 5.32962 15.496 5.06562 14.976L4.49407 13.8507C4.42199 13.7061 4.31751 13.5801 4.18877 13.4825C4.06004 13.3849 3.91052 13.3183 3.75185 13.288L2.55096 13.0684C1.99629 12.9662 1.6194 12.4249 1.69762 11.8418L1.86918 10.5822C1.89167 10.4189 1.87784 10.2527 1.82867 10.0953C1.7795 9.93797 1.69621 9.79342 1.58473 9.67199L0.737624 8.75554C0.548926 8.54845 0.444336 8.27838 0.444336 7.99821C0.444336 7.71804 0.548926 7.44797 0.737624 7.24088L1.58562 6.32532C1.80873 6.08443 1.91451 5.74754 1.86918 5.41599L1.69762 4.15643C1.61851 3.5751 1.99629 3.03199 2.55096 2.93154L3.75185 2.7111C4.06829 2.65243 4.34207 2.44443 4.49318 2.14843L5.06473 1.02399C5.32873 0.504876 5.9394 0.297765 6.44518 0.555542L7.54118 1.11465C7.68287 1.1872 7.83977 1.22504 7.99896 1.22504C8.15814 1.22504 8.31504 1.1872 8.45673 1.11465H8.45762Z" fill="#DA0116" />
                                                    <path d="M5.42139 7.80184L7.3485 9.68539L10.6969 5.88184" stroke="white" strokeWidth="1.03022" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_11_2602">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='text-grey3 fw-bold mt-2'>
                                        ~ $0.00
                                    </div>
                                </div>
                                <div className='text-center my-2'>
                                    <img src={circle} className='img-fluid' alt="image" />
                                </div>
                                <div className='nft-input-group mt-1 text-start'>
                                    <label htmlFor="">You get</label>
                                    <div className='nft-input'>
                                        <input type="text" placeholder='0.00' />
                                        <div>
                                            <Button className='btn theme-btn fw-bold' style={{ width: 130, fontSize: '14px' }}>Select token</Button>
                                        </div>
                                    </div>
                                    <div className='text-grey3 fw-bold mt-2'>
                                        ~ $0.00
                                    </div>
                                </div>
                                <div className='mt-5 pt-4'>
                                    <Button className='btn theme-btn fw-bold' style={{ width: '100%', padding: '15px', fontSize: '14px' }}>Connect to swap</Button>
                                </div>
                                <div className='mt-4'>
                                    <h6 className='text-white d-flex align-items-center justify-content-between mt-2'>
                                        <span className='poppins fw-bold' style={{ fontSize: 15 }}
                                        >Chart</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path d="M1 1L6 6L1 11" stroke="#727288" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </h6>
                                    <h6 className='text-white d-flex align-items-center justify-content-between mt-2'>
                                        <span className='poppins fw-bold' style={{ fontSize: 15 }}>Share & Earn</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path d="M1 1L6 6L1 11" stroke="#727288" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='nft-box4 text-center px-0'>
                            <img src={Nft2} className='img-fluid' alt="image" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Stacking