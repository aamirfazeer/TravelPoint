import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VehicleRequest = () => {
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/vehicle/${id}`);
        console.log("Response data",response.data)
        setRequestDetails(response.data[0]);  // No need for response.json()
      } catch (error) {
        setError("Failed to fetch data");
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

  if (error) {
    return <div className="container mt-5">{error}</div>;
  }

  if (!requestDetails) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <p><strong>User ID: </strong>{requestDetails.capacity}</p>
        <p><strong>Name: </strong>{requestDetails.name}</p>
        <p><strong>Type: </strong>{requestDetails.type}</p>
        <p><strong>Capacity: </strong>{requestDetails.capacity}</p>
        <p><strong>Fuel Type: </strong>{requestDetails.fuel_type}</p>
        <p><strong>Mileage: </strong>{requestDetails.mileage}</p>
        <p><strong>Price: </strong>{requestDetails.price}</p>
        <p><strong>Vehicle Registration Number: </strong>{requestDetails.registration_number}</p>
        <p><strong>Vehicle Identification Number: </strong>{requestDetails.vin}</p>
        <p><strong>Photo: </strong><img src={requestDetails.photo_url} alt="Vehicle" width="100" /></p>

        <button className='bg-green'>Accept</button>
      </div>
    </div>
  );
};

export default VehicleRequest;
