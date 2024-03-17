import React, { useState, useEffect } from 'react';
import NavBar from "./Back";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Photos() {
    const [photoData, setPhotoData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date()); // State for the selected date

    useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); // Set the date to yesterday
        setSelectedDate(yesterday); // Set yesterday as the default selected date
        fetchPhoto(yesterday); // Fetch photo data for yesterday when component mounts
    }, []); // Fetch photo data only when component mounts

    const fetchPhoto = async (date) => {
        try {
            const apiKey = 'H5g86kW7KlmRQnshr5zGkqUYi2OorIZmi4KL2s5d';
            const formattedDate = formatDate(date); // Format date to YYYY-MM-DD
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`);

            if (!res.ok) {
                throw new Error('Failed to fetch data from the NASA API. Please choose a date already captured.');
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
        fetchPhoto(date); // Fetch photo data when date changes
    };

    const formatDate = (date) => {
        // Format date to YYYY-MM-DD
        return date.toISOString().split('T')[0];
    };

    if (error) return <p>Error: {error}</p>;
    if (!photoData) return <p>Loading...</p>;
    
    return (
        <>
        <NavBar />
        <div class = "App">
        <DatePicker 
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            showPreviousMonths={true} // Enable navigation to previous month
            numberOfMonths={1} // Show one month at a time
            className="custom-datepicker" // Add a custom class for styling
        />

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
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
            />
        )}
        </div>
        <h1>{photoData.title}</h1>
        <h5>{photoData.date}</h5>
        <p>{photoData.explanation}</p>
    </div>
    </>
    );
}
