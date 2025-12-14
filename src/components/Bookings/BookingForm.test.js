import { initializeTimes, updateTimes } from "./BookingPage";
import { render, screen } from "@testing-library/react";
import ConfirmedBooking from "./ConfirmedBooking";
import React from "react";

// Mock fetchAPI
const mockFetchAPI = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  global.fetchAPI = mockFetchAPI;
  localStorage.clear();
});

describe("BookingPage API functions with fetchAPI", () => {
  test("initializeTimes calls fetchAPI and returns times", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    mockFetchAPI.mockReturnValue(mockTimes);

    const times = initializeTimes();
    expect(mockFetchAPI).toHaveBeenCalled();
    expect(times).toEqual(mockTimes);
  });

  test("updateTimes calls fetchAPI with action.date and returns times", () => {
    const mockTimes = ["18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", date: "2025-12-14" };
    mockFetchAPI.mockReturnValue(mockTimes);

    const newTimes = updateTimes([], action);
    expect(mockFetchAPI).toHaveBeenCalledWith(new Date(action.date));
    expect(newTimes).toEqual(mockTimes);
  });

  test("updateTimes returns same state for unknown action type", () => {
    const state = ["17:00", "18:00"];
    const newTimes = updateTimes(state, { type: "UNKNOWN" });
    expect(newTimes).toEqual(state);
  });
});

describe("ConfirmedBooking localStorage behavior", () => {
  test("reads booking data from localStorage and displays it", () => {
    const mockData = {
      date: "2025-12-14",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };
    localStorage.setItem("bookingData", JSON.stringify(mockData));

    render(<ConfirmedBooking />);

    expect(screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();
    expect(screen.getByText(/Date:\s*2025-12-14/i)).toBeInTheDocument();
    expect(screen.getByText(/Time:\s*18:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Guests:\s*2/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion:\s*Birthday/i)).toBeInTheDocument();
  });

  test("shows message if no booking data in localStorage", () => {
    render(<ConfirmedBooking />);
    expect(screen.getByText(/No booking data available/i)).toBeInTheDocument();
  });
});
