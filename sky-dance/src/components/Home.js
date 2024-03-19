import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ position: 'relative' }}>
            <img src="https://i.pinimg.com/originals/b4/ec/37/b4ec37d5fa6b52179f6cfd20f4b2fbd9.gif" style={{ width: '100%', height: 'auto' }} alt="Sky" />
            <div className= 'button-container'>
            <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', textAlign: 'center' }}>
                <Link to="/photos" className='button'>
                    Look up in the sky, it's a bird, it's a plane
                </Link>
            </div>
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', textAlign: 'center' }}>
                <Link to="/mars" className='button' >
                    Look up in the sky! It's the planet Mars! 
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Home;
