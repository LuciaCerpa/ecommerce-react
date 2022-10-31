import React, { useRef, useEffect } from 'react';

import { NavLink, useNavigate, Link } from 'react-router-dom'
import './header.css';

import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import UseAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const menuRef = useRef(null)
    const navigate = useNavigate()
    const {currentUser} = UseAuth()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }


        });
    };

    const logout = () => {
        signOut(auth).then(()=>{
            toast.success('Logged out')
            navigate('/login')
        }).catch(err=>{
            toast.error(err.message)
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Luxy's Store</h1>
                            </div>
                        </div>
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">

                                {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav__icons">

                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge"></span>
                            </span>

                            <span className="cart__icon" onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <span>
                                <motion.img whileTap={{ scale: 1.2 }} src={ currentUser ? currentUser.photoURL :  userIcon} alt="user icon" />
                                { currentUser ? <span className='p-2 fs-5'>{currentUser.displayName}</span>:<></>}
                            </span>
                            <div className="profile__actions">
                                {
                                    currentUser ? <span onClick={logout} className="shop__btn">Logout</span> : 
                                    <>
                                        <Link to='/signup' className='shop__btn m-1'>Signup</Link>
                                        <Link to='/login' className='shop__btn'>Login</Link>
                                    </>
                                    
                                }
                            </div>
                            <div className="mobile__menu">
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
