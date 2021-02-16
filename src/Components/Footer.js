import React from 'react';

import logo from './images/brandlogo.png';
//import logo2 from './images/footer.png';
import   "./container.css";

const Footer = () => {

    return(
        <div className='footer' >
                <img src={logo} className='footer-logo' alt='info-detail-logo' />
        </div>
    )

}

export default Footer;