import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TabLayout from "../components/TabLayout";
import person from "../assets/images/placeholder.jpg";

const getBookingStatus = (booking) => {
  const now = new Date();
  const deliverDate = new Date(booking.deliver_date);
  const returnDate = new Date(booking.return_date);

  if (now < deliverDate) {
    return "Booked";
  } else if (now >= deliverDate && now < returnDate) {
    return "Delivered";
  } else if (now >= returnDate) {
    return "Returned";
  }

  return "Unknown Status";
};

const calculateDaysBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end - start;
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference;
};


const BookingInfo = () => {
  const { id: userId } = useParams();
  const [user, setUser] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/traveller/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}/bookings`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    fetchUser();
    fetchBookings();
  }, [userId]);

  const pro_pic = user.profile_pic ? `data:image/jpeg;base64,${user.profile_pic}` : person;

  return (
    <TabLayout>
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <img
            src={pro_pic}
            className="rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <h5 className="card-title mb-0 fw-bold fs-4">{user.first_name} {user.last_name}</h5>
          <a href="#" className="text-decoration-none">
            ID: {user.id}  |   @{user.username ? user.username : "<unavailable>"}
          </a>
        </div>
      </div>
      <div className="container">
        <div
          className="row fw-bold border-bottom bg-white align-items-center"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            height: "45px",
          }}
        >
          <div className="col">Service</div>
          <div className="col">Service Provider</div>
          <div className="col">Amount</div>
          <div className="col">Status</div>
        </div>
        <hr></hr>
        {bookings.map((booking) => {
          const status = getBookingStatus(booking);

          
          const daysBetween = calculateDaysBetween(booking.deliver_date, booking.return_date);
          let totalPrice = 0;

          switch (booking.type) {
            case "2": // Guide
              totalPrice = daysBetween * booking.guide[0]?.price;
              break;
            case "3": // Equipment
              totalPrice = daysBetween * booking.equipment[0]?.price;
              break;
            case "4": // Vehicle
              totalPrice = daysBetween * booking.vehicle[0]?.price;
              break;
            default:
              totalPrice = 0;
          }


          return (
            <div
              className="row border-bottom py-2 bg-white mb-2"
              key={booking.id}
            >
              {(() => {
                switch (booking.type) {
                  case "2":
                    return (
                      <>
                        <div className="col">{booking.service}</div>
                        <div className="col">{booking.guide[0]?.name}</div>
                        <div className="col">{totalPrice}</div>
                      </>
                    );
                  case "3":
                    return (
                      <>
                        <div className="col">{booking.equipment[0]?.name}</div>
                        <div className="col">
                          {booking.equipment[0]?.first_name}{" "}
                          {booking.equipment[0]?.last_name}
                        </div>
                        <div className="col">{totalPrice}</div>
                      </>
                    );
                  case "4":
                    return (
                      <>
                        <div className="col">{booking.vehicle[0]?.type}</div>
                        <div className="col">
                          {booking.vehicle[0]?.first_name}{" "}
                          {booking.vehicle[0]?.last_name}
                        </div>
                        <div className="col">{totalPrice}</div>
                      </>
                    );
                  default:
                    return <div className="col">Unknown booking type</div>;
                }
              })()}
              <div className="col">{status}</div>
            </div>
          );
        })}
      </div>
    </TabLayout>
  );
};

export default BookingInfo;
