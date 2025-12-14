// src/components/Bookings/BookingForm.jsx
import React, { useState, useEffect } from "react";

export default function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  handleSubmit,
  fetchAPIProp,
}) {
  const [localTimes, setLocalTimes] = useState(availableTimes || []);

  useEffect(() => {
    const times =
      (fetchAPIProp
        ? fetchAPIProp(new Date(date))
        : typeof window.fetchAPI === "function"
        ? window.fetchAPI(new Date(date))
        : ["17:00", "18:00", "19:00"]) || [];
    setLocalTimes(times);
    if (times.length > 0) setTime(times[0]);
  }, [date, setTime, fetchAPIProp]);

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    const times =
      (fetchAPIProp
        ? fetchAPIProp(new Date(value))
        : typeof window.fetchAPI === "function"
        ? window.fetchAPI(new Date(value))
        : ["17:00", "18:00", "19:00"]) || [];
    setLocalTimes(times);
    if (times.length > 0) setTime(times[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    if (typeof window.submitAPI === "function") {
      await window.submitAPI(formData);
    }
    await handleSubmit(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Choose date</h2>
      <label htmlFor="res-date">Date:</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Time:</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {localTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}
