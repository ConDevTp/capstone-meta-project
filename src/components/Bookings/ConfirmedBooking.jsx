import { useEffect, useState } from "react";

function ConfirmedBooking() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingData"));
    setBookingData(data);
  }, []);

  if (!bookingData) {
    return <p>No booking data available. Please make a booking first.</p>;
  }

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Date: {bookingData.date}</p>
      <p>Time: {bookingData.time}</p>
      <p>Guests: {bookingData.guests}</p>
      <p>Occasion: {bookingData.occasion}</p>
    </div>
  );
}

export default ConfirmedBooking;
