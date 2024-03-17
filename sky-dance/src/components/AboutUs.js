import React from 'react';
import pic1 from './media/pic1.png'; // Import the images from the folder
import pic2 from './media/pic2.png';
import pic3 from './media/pic3.png';

const About = () => {
    return (
        <>
        <div style={{ position: 'relative' }}>
            <img src="https://i.pinimg.com/originals/b4/ec/37/b4ec37d5fa6b52179f6cfd20f4b2fbd9.gif" style={{ width: '100%', height: 'auto' }} alt="Sky" />
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', textAlign: 'center', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.querySelector('.text-box').style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.querySelector('.text-box').style.opacity = '0'}>
                    <img src={pic1} alt="Image 1" style={{ width: '100%', height: 'auto', transition: 'transform 0.2s', borderRadius: '5px' }} />
                    <div className="text-box" style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', opacity: '0', transition: 'opacity 0.2s', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>Ai Tran</div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.querySelector('.text-box').style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.querySelector('.text-box').style.opacity = '0'}>
                    <img src={pic2} alt="Image 2" style={{ width: '100%', height: 'auto', transition: 'transform 0.2s', borderRadius: '5px' }} />
                    <div className="text-box" style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', opacity: '0', transition: 'opacity 0.2s', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>Shawn Jones</div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.querySelector('.text-box').style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.querySelector('.text-box').style.opacity = '0'}>
                    <img src={pic3} alt="Image 3" style={{ width: '100%', height: 'auto', transition: 'transform 0.2s', borderRadius: '5px' }} />
                    <div className="text-box" style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', opacity: '0', transition: 'opacity 0.2s', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>Katelyn Cooper</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;
