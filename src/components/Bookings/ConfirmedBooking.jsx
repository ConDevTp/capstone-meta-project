// src/components/Bookings/ConfirmedBooking.jsx
import React from "react";

export default function ConfirmedBooking({ bookingData }) {
  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your reservation has been successfully submitted:</p>
      <ul>
        <li>Date: {bookingData.date}</li>
        <li>Time: {bookingData.time}</li>
        <li>Guests: {bookingData.guests}</li>
        <li>Occasion: {bookingData.occasion}</li>
      </ul>
    </div>
  );
}
