import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
 return (
    <div>

<Link to="/" style={{ 
    display: 'block',
    width: 'fit-content',
    margin: '0 auto',
    padding: '10px 50px',
    backgroundColor: 'transparent',
    color: 'black', /* Change text color to black */
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: '2px solid white',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
}}>Take me home</Link>

    </div>
 );

}
export default NavBar;