import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';

const VehicleRequest = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/vehicle/${id}`);
        console.log("Response data",response.data)
        setRequestDetails(response.data[0]);  

      } catch (error) {
        setError("Failed to fetch data");
        console.error(error);
      }

      
    };
    fetchDetails();
  }, [id]);

  const handleDownload = () => {
    if (!requestDetails.document_path) {
      Swal.fire("Error", "No document available to download.", "error");
      return;
    }
  
    const link = document.createElement("a");
    link.href = `data:application/pdf;base64,${requestDetails.document_path}`;
    link.download = "vehicle_request.pdf";
    link.click();
  };

  const handleViewPDF = () => {
    if (!requestDetails.document_path) {
      Swal.fire("Error", "No document available to view.", "error");
      return;
    } 
    const pdfUrl = `data:application/pdf;base64,${requestDetails.document_path}`;
    window.open(pdfUrl, "_blank")?.focus();
  };


  const acceptRequest = () =>{
    Swal.fire({
      title: "Are you sure?",
      text:"Do you want to accept the request?",
      icon:"question",
      showCancelButton: true,
      confirmButtonText:"Confirm",
      cancelButtonText:"Cancel"
    }).then(async (result) => {
      if(result.isConfirmed) {
        try{
          await axios.put(`http://localhost:5000/api/users/vehicle/${id}`, {status : 1});
          Swal.fire(
            'Accepted!',
            'The request han been accepted.',
            'Success'
          );
          setRequestDetails((prevDetails) => ({
            ...prevDetails, status:1
          }));
          navigate("/vehicle-rentals")

        }catch(error){
          console.error("Failed to update request status:", error);
          Swal.fire(
            'Error!',
            'Failed to accept the request. Please try again.',
            'error'
          );
        }
      }
    });
  }
  const rejectRequest = () =>{
    Swal.fire({
      title: "Are you sure?",
      text:"Do you want to reject the request?",
      icon:"question",
      showCancelButton: true,
      confirmButtonText:"Reject",
      cancelButtonText:"Cancel"
    }).then(async (result) => {
      if(result.isConfirmed) {
        try{
          await axios.put(`http://localhost:5000/api/users/vehicle/${id}`, {status : -1});
          Swal.fire(
            'Rejected!',
            'The request han been rejected.',
            'Success'
          );
          setRequestDetails((prevDetails) => ({
            ...prevDetails, status:-1
          }));
          navigate("/vehicle-rentals")

        }catch(error){
          console.error("Failed to reject request status:", error);
          Swal.fire(
            'Error!',
            'Failed to reject the request. Please try again.',
            'error'
          );
        }
      }
    });
  }

  return (
    <div className="container mt-2">
      <div className="card  p-4">
        <p><strong>User ID: </strong>{requestDetails.capacity}</p>
        <p><strong>Type: </strong>{requestDetails.type}</p>
        <p><strong>Capacity: </strong>{requestDetails.capacity}</p>
        <p><strong>Fuel Type: </strong>{requestDetails.fuel_type}</p>
        <p><strong>Mileage: </strong>{requestDetails.milage}</p>
        <p><strong>Price: </strong>{requestDetails.price}</p>


        <p><strong>Vehicle Document: </strong><button onClick={handleDownload} className="btn btn-primary">
            Download PDF
          </button>
        </p>


        <p><strong>Vehicle Identification Number: </strong>{requestDetails.vin}</p>
        <p><strong>Photo: </strong><img src={`data:image/jpeg;base64,${requestDetails.photo_path}`} alt="Vehicle" width="100" /></p>

        <div className='d-flex gap-4'>
        <button 
          style={
          {backgroundColor:"green", 
          width:"180px",
          height:"40px",
          borderRadius:"15px",
          border:"none",
          color:"white",
          fontWeight:"bold"
          }}
          onClick={acceptRequest}>
            Accept Request
        </button>
        <button 
          style={{
          backgroundColor:"red", 
          width:"180px",
          height:"40px",
          borderRadius:"15px",
          border:"none",
          color:"white",
          fontWeight:"bold"
          }}
          onClick={rejectRequest}
          >
            Reject Request
        </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleRequest;
