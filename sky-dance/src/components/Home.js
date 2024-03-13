import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div style={{ position: 'relative' }}>
            <img src="https://i.pinimg.com/originals/b4/ec/37/b4ec37d5fa6b52179f6cfd20f4b2fbd9.gif" style={{ width: '100%', height: 'auto' }} alt="Sky" />
            <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', textAlign: 'center' }}>
                <Link to="/photos" style={{ 
                    display: 'inline-block',
                    padding: '10px 50px',
                    backgroundColor: 'transparent', /* Change to transparent */
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    border: '2px solid white', /* Add border */
                    cursor: 'pointer',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease',
                }}>
                    Look up in the sky, it's a bird, it's a plane
                </Link>
            </div>
        </div>
    );
}

export default Home;
