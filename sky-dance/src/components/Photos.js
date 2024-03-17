import React, { useState, useEffect } from 'react';
import Back from "./Back";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Photos() {
    const [photoData, setPhotoData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date()); // State for the selected date

    useEffect(() => {
        fetchPhoto(selectedDate); // Fetch photo data when component mounts
    }, [selectedDate]); // Fetch photo data whenever selectedDate changes

    const fetchPhoto = async (date) => {
        try {
            const formattedDate = formatDate(date); // Format date to YYYY-MM-DD
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=H5g86kW7KlmRQnshr5zGkqUYi2OorIZmi4KL2s5d&date=${formattedDate}`);

            if (!res.ok) {
                throw new Error('Failed to fetch data from the NASA API');
            }
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        // Format date to YYYY-MM-DD
        return date.toISOString().split('T')[0];
    };

    if (error) return <p>Error: {error}</p>;
    if (!photoData) return <p>Loading...</p>;
    
    return (
        <>
        <Back />
        <div class = "App">
        <DatePicker 
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="yyyy-MM-dd"
    showPreviousMonths={true} // Enable navigation to previous month
    numberOfMonths={1} // Show one month at a time
    className="custom-datepicker" // Add a custom class for styling
/>

            <h1>{photoData.title}</h1>
            <div className="photo-container">
    {photoData.media_type === "image" ? (
        <div className="photo-box">
            <img
                src={photoData.hdurl} 
                alt={photoData.title}
                className="photo"
            />
        </div>
    ) : ( 
        <div className="photo-box">
            <iframe
                title="space-video"
                src={photoData.hdurl}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
            />
        </div>
    )}
</div>

            <h5>{photoData.date}</h5>
            <p>{photoData.explanation}</p>
        </div>
        </>
    );
}
