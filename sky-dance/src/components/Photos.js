import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Photos() {
    const [photoData, setPhotoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPhoto() {
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=H5g86kW7KlmRQnshr5zGkqUYi2OorIZmi4KL2s5d`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data from the NASA API');
                }
                const data = await res.json();
                setPhotoData(data);
                console.log(data);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchPhoto();
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!photoData) return <p>Loading...</p>;
    
    return (
        <>
        <NavBar />
        <div>
            {photoData.media_type === "image" ? (
                <img
                    src={photoData.hdurl} 
                    alt={photoData.title}
                />
            ) : ( 
                <iframe
                    title="space-video"
                    src={photoData.hdurl}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}

            <h1>{photoData.title}</h1>
            <h5>{photoData.date}</h5>
            <p>{photoData.explanation}</p>
        </div>
        </>
    );
}
