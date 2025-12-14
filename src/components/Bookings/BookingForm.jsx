import React, { useState, useEffect } from "react";
import "./booking.css";

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
  const [formValid, setFormValid] = useState(false);

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

  useEffect(() => {
    if (date && time && guests >= 1 && guests <= 10 && occasion) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [date, time, guests, occasion]);

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
    if (!formValid) return;
    const formData = { date, time, guests, occasion };

    if (typeof window.submitAPI === "function") {
      await window.submitAPI(formData);
    }
    await handleSubmit(formData);
  };

  return (
    <form onSubmit={onSubmit} className="booking-form">
      <label htmlFor="res-date">Date:</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Time:</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
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
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!formValid} aria-label="On Click">
        Make Your Reservation
      </button>
    </form>
  );
}
