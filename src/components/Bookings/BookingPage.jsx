// src/components/Bookings/BookingPage.jsx
import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import Content from "../Content/Content";
import { Routes, Route } from "react-router";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  return state;
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return updateTimes(state, action);
    default:
      return state;
  }
};

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  const [bookingData, setBookingData] = useState(null);

  const submitForm = (data) => {
    setBookingData(data);
  };

  return (
    <Content>
      <Routes>
        <Route
          path="/"
          element={
            <BookingForm
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              handleSubmit={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={
            bookingData && <ConfirmedBooking bookingData={bookingData} />
          }
        />
      </Routes>
    </Content>
  );
};

export default BookingPage;
