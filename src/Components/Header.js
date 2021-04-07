import React from 'react';
import { Link } from "react-router-dom";


import logo from './images/brandlogo.png';
import   "./container.css";

const logoutBuild = reset => {
    let logout ;

    logout = (  <div className='brand right'><Link to='/' className='link-dec  right' >
                    <button 
                     onClick={()=>reset()}
                        className='end-game' > 
                        End Game   
                    </button>
                    </Link> </div> )
    

    return logout;
}

const Header = props => {

    const logout = (props.userLogin) ? logoutBuild( props.resetWhole) : ''

   // console.log(props.userLogin)
    return(

        <div  className='header'>
            <div className=' brand '>
                <Link to='/' className='link-dec  left' onClick={()=>props.resetWhole()} >
                    {/* <div className='left' > */}
                        <img src={logo} alt='info-detail-logo' />
                        <div className='heading'> TicTacToe</div>
                    {/* </div> */}
                </Link>
            </div>
            {logout}

        </div>
         

    )

}

export default Header;



