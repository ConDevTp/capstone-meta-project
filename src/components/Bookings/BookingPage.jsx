import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import Content from "../Content/Content";
import { Routes, Route, useNavigate } from "react-router";

export const initializeTimes = () => {
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date()); // زمان‌های امروز
  }
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES" && typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date(action.date)); // زمان‌های تاریخ انتخاب شده
  }
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

  const navigate = useNavigate();

  const submitForm = async (data) => {
    if (typeof window.submitAPI === "function") {
      const success = await window.submitAPI(data);
      if (success) {
        navigate("/confirmed-booking", { state: data });
      }
    } else {
      navigate("/confirmed-booking", { state: data });
    }
  };

  return (
    <Content>
      <Routes>
        <Route
          path="/"
          element={
            <BookingForm
              date={date}
              setDate={(d) => {
                setDate(d);
                dispatch({ type: "UPDATE_TIMES", date: d });
              }}
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
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </Content>
  );
};

export default BookingPage;
