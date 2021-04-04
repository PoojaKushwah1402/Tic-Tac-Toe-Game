import React from 'react';
import { Link } from "react-router-dom";


import logo from './images/brandlogo.png';
import   "./container.css";

const logoutBuild = reset => {
    let logout ;

    logout = (  <Link to='/' className='link-dec brand right' >
                    <button 
                     onClick={()=>reset()}
                        className='end-game' > 
                        End Game   
                    </button>
                    </Link> )
    

    return logout;
}

const Header = props => {

    const logout = (props.userLogin) ? logoutBuild( props.resetWhole) : ''

    console.log(props.userLogin)
    return(

        <div  className='header'>
            <Link to='/' className='link-dec brand' >
                <div className='left' >
                    <img src={logo} alt='info-detail-logo' />
                    <div className='heading'> Tic Tac Toe</div>
                </div>
            </Link>
            {logout}

        </div>
         

    )

}

export default Header;



