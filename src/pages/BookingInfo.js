import React from "react";
import TabLayout from "../components/TabLayout";
import person2 from "../assets/images/person2.png";

const bookingData = [
  {
    service: "Toyota Corolla",
    provider: "AAA Car Rentals",
    amount: "2000.00 LKR",
    status: "Delivered",
    statusColor: "text-success",
    statusIcon: "✔️",
  },
  {
    service: "3 Person Tent",
    provider: "AAA Tools",
    amount: "1000.00 LKR",
    status: "Requested",
    statusColor: "text-danger",
    statusIcon: "❌",
  },
  {
    service: "Suzuki WagonR",
    provider: "AAA Car Rentals",
    amount: "1500.00 LKR",
    status: "Requested",
    statusColor: "text-danger",
    statusIcon: "❌",
  },
  {
    service: "Toyota Axio",
    provider: "AAA Car Rentals",
    amount: "2000.00 LKR",
    status: "Delivered",
    statusColor: "text-success",
    statusIcon: "✔️",
  },
];

const BookingInfo = () => {
  return (
    <TabLayout>
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <img
            src={person2}
            className="img-rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <h5 className="card-title mb-0 fw-bold fs-4">Ms. Perera</h5>
          <a href="#" className="text-decoration-none">
            Traveller ID #1254852
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
        {bookingData.map((booking, index) => (
          <div className="row border-bottom py-2 bg-white mb-2" key={index}>
            <div className="col">{booking.service}</div>
            <div className="col">{booking.provider}</div>
            <div className="col">{booking.amount}</div>
            <div className={`col ${booking.statusColor}`}>
              {booking.status} {booking.statusIcon}
            </div>
          </div>
        ))}
      </div>
    </TabLayout>
  );
};

export default BookingInfo;
