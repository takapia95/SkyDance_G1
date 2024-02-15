import React, { useState, useEffect } from 'react';

export default function Photos() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=H5g86kW7KlmRQnshr5zGkqUYi2OorIZmi4KL2s5d');
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }

        fetchPhoto(); // Call the fetchPhoto function
    }, []);

    if (!photoData) return <p>Loading...</p>;
    return (
        <div>
            <img
                src={photoData.hdurl} 
                alt={photoData.title}
            />
        </div>
    );
}
