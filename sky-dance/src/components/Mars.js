import React, { useEffect, useState } from 'react';
import Back from "./Back";

const MarsRoverPhotos = () => {
  const [photoUrls, setPhotoUrls] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');

  useEffect(() => {
    const apiKey = 'H5g86kW7KlmRQnshr5zGkqUYi2OorIZmi4KL2s5d';
    const roverName = 'curiosity'; // You can change to other rovers like 'opportunity', 'spirit'
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&camera=${selectedCamera}&api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming the response contains an array of photos, get all photo URLs
        const photos = data.photos;
        const photoUrls = photos.map(photo => photo.img_src);
        setPhotoUrls(photoUrls);
      })
      .catch(error => console.error('Error fetching Mars photos:', error));
  }, [selectedCamera]);

  // List of available camera options
  const cameras = [
    'FHAZ - Front Hazard Avoidance Camera',
    'RHAZ - Rear Hazard Avoidance Camera',
    'MAST - Mast Camera',
    'CHEMCAM - Chemistry and Camera Complex',
    'NAVCAM - Navigation Camera'
    // Removed the specified cameras
  ];

  // Function to handle select box change
  const handleCameraChange = event => {
    setSelectedCamera(event.target.value);
  };

  return (
    <>
      <Back/>
      <div style={{ textAlign: 'center' }}>
        <select value={selectedCamera} onChange={handleCameraChange} className="custom-datepicker">
          <option value="">Select Camera</option>
          {cameras.map((camera, index) => (
            <option key={index} value={camera.split(' - ')[0]}>
              {camera}
            </option>
          ))}
        </select>
        <br />
        {photoUrls.map((url, index) => (
          <img key={index} src={url} alt={`Mars Rover ${index}`} style={{ margin: '10px' }} />
        ))}
      </div>
    </>
  );
}

export default MarsRoverPhotos;
