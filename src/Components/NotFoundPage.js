import React from 'react';

import logo from './images/oops-doghouse.jpg';
import   "./container.css";

const NotFound = () => {

    return(
        <div className='not-found-div' >
                <img src={logo} className='not-found-image' alt='info-detail-logo' />
                <h1>404</h1>
                <h2>OOps Page not found</h2>
        </div>
    )

}

export default NotFound;