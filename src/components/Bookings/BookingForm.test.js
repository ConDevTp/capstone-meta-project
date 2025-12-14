import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock API functions for Jest
const mockFetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
const mockSubmitAPI = jest.fn(() => true);

test("renders BookingForm heading", () => {
  render(
    <BookingForm
      date="2025-12-14"
      setDate={() => {}}
      time="17:00"
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion="Birthday"
      setOccasion={() => {}}
      availableTimes={["17:00", "18:00", "19:00"]}
      handleSubmit={() => {}}
      fetchAPIProp={mockFetchAPI} // اینجا mock پاس داده می‌شود
    />
  );
  const headingElement = screen.getByText(/Choose date/i);
  expect(headingElement).toBeInTheDocument();
});

// Optional: tests for initializeTimes and updateTimes if defined in BookingPage
import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes returns correct initial times", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns same times for now", () => {
  const state = ["17:00", "18:00"];
  const newTimes = updateTimes(state);
  expect(newTimes).toEqual(state);
});
