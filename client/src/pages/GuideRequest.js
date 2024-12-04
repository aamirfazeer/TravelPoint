import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';


const GuideRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/guide/${id}`);
        console.log("Response data",response.data)
        setRequestDetails(response.data[0]);  // No need for response.json()
      } catch (error) {
        setError("Failed to fetch data");
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

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
          await axios.put(`http://localhost:5000/api/users/guide/${id}`, {status : 1});
          Swal.fire(
            'Accepted!',
            'The request han been accepted.',
            'Success'
          );
          setRequestDetails((prevDetails) => ({
            ...prevDetails, status:1
          }));
          navigate("/travel-guides")

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
          await axios.put(`http://localhost:5000/api/users/guide/${id}`, {status : -1});
          Swal.fire(
            'Rejected!',
            'The request han been rejected.',
            'Success'
          );
          setRequestDetails((prevDetails) => ({
            ...prevDetails, status:-1
          }));
          navigate("/travel-guides")

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

  if (error) {
    return <div className="container mt-5">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card p-2">
        <p><strong>User ID: </strong> </p>
        <p><strong>Name: </strong> </p>
        <p><strong>Location: </strong> </p>
        <p><strong>Languages: </strong> </p>
        <p><strong>Preference: </strong> </p>
        <p><strong>Description: </strong> </p>
        <p><strong>NIC Document: </strong> </p>
        <p><strong>Photo:</strong> </p>
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
  )
}

export default GuideRequest