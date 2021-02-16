import React from 'react';
import { Link } from "react-router-dom";


import logo from './images/brandlogo.png';
import   "./container.css";


const Header = () => {

    return(

         <Link to='/' className='link-dec' >
            <div className='header' >
                <img src={logo} alt='info-detail-logo' />
                <div className='heading'> Tic Tac Toe</div>
            </div>
         </Link>

    )

}

export default Header;



