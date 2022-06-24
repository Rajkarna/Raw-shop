import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () => (
    <div className='header'>
        <Link classname="logo-container" to="/">
           <Logo />
        </Link>
        <div className='options'>
            <Link classname="option" to="/shop">
                SHOP
            </Link>
            <Link classname="option" to="/">
                CONTACT
            </Link>
          
        </div>
    </div>
)

export default Header;