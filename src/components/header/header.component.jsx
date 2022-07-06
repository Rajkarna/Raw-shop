import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ( { currentUser } ) => (
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
            {
                currentUser ?
                <Link classname='signout' to="/signin" onClick={() => auth.signOut()}>SIGN OUT </Link>
                :
                <Link classname='option' to="/signin">
                    SIGN IN
                </Link>
            }
          
        </div>
    </div>
)

export default Header;