import React from 'react';
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='12'>
                    <div className="logo">
                        <h1 className='text-white'>Luxy's Store</h1>        
                    </div>
                        <p className="footer__text mt-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est alias minima atque, quibusdam explicabo illo quaerat dolorem! Voluptatum, deleniti tempora!
                            </p>
                    </Col>
                    <Col lg='2' md='4'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">
                                Top Categories
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'><Link to='#'>Mobile Phones</Link></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><Link to='#'>Modern Sofa</Link></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><Link to='#'>Arm Chair</Link></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><Link to='#'>Watches</Link></ListGroupItem>
                                
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='4'>
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">
                                Useful Links
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'><Link to='/shop'>Shop</Link></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><Link to='/cart'>Cart</Link></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><Link to='/login'>Login</Link></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><Link to='#'>Privacy Policy</Link></ListGroupItem>
                                
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">
                                Contact
                            </h4>
                            <ListGroup className='contact'>
                                <ListGroupItem className='ps-0 border-0'><span><i className="ri-map-pin-line "></i></span>
                                <p>Av. revolucion #405 <br></br>col. chapultepec <br></br> Guadalajara, Jal. <br></br> C.P. 54125</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><span><i className="ri-phone-line"></i></span>
                                <p>(+52) 334-758-6410</p></ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'><span><i className="ri-mail-line"></i></span>
                                <p>luxys_store@gmail.com</p></ListGroupItem>  
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer__copyright">Copyright {year} developed by Lucia Cerpa. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
