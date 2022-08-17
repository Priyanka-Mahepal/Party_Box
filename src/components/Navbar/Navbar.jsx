import React from 'react'
import './Navbar.css'
import logo from '../img/logo.png'
import heart from '../img/heart.png'
import user from '../img/user.png'
import bag from '../img/bag.png'


const Navbar = () => {
    return (
        <div>
            <nav className='navbar-dark bg-myBlack' style={{ height: '100%' }}>
                <div className='container' style={{ height :'100%'}}>
                    <div className="d-flex flex-wrap align-items-center justify-content-between topBar">
                        <div className="p-2 bd-highlight col-example text-left logoo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="p-2  bg-searchform col-example text-left">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" />
                            </form>
                        </div>
                        <div className="p-2  col-example text-left">
                            <div className="d-flex justify-content-between scart">
                                <div className="p-2 m-2"> <img src={heart} alt="Like" /></div>
                                <div className="p-2 m-2"><img src={user} alt="User" /></div>
                                <div className="p-2 m-2 shopCart">
                                    <div className='cart'>0</div>
                                    <img src={bag} alt="Bag" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar