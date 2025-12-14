// src/components/Bookings/BookingForm.test.js
import { initializeTimes, updateTimes } from "./BookingPage";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import React, { useState } from "react";

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

describe("BookingForm validation and submission", () => {
  test("renders all form fields with correct HTML5 validation", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        guests={1}
        setGuests={() => {}}
        occasion=""
        setOccasion={() => {}}
        availableTimes={["17:00", "18:00"]}
        handleSubmit={mockSubmit}
      />
    );

    expect(screen.getByLabelText(/Date/i)).toHaveAttribute("required");
    expect(screen.getByLabelText(/Time/i)).toHaveAttribute("required");
    expect(screen.getByLabelText(/Number of guests/i)).toHaveAttribute(
      "required"
    );
    expect(screen.getByLabelText(/Number of guests/i)).toHaveAttribute(
      "min",
      "1"
    );
    expect(screen.getByLabelText(/Number of guests/i)).toHaveAttribute(
      "max",
      "10"
    );
    expect(screen.getByLabelText(/Occasion/i)).toHaveAttribute("required");
  });

  test("submit button is disabled for invalid form", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        guests={0}
        setGuests={() => {}}
        occasion=""
        setOccasion={() => {}}
        availableTimes={["17:00"]}
        handleSubmit={mockSubmit}
      />
    );
    const button = screen.getByRole("button", {
      name: /On Click/i, // تغییر داده شد
    });
    expect(button).toBeDisabled();
  });

  test("submit button is enabled when form is valid", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        date="2025-12-14"
        setDate={() => {}}
        time="17:00"
        setTime={() => {}}
        guests={2}
        setGuests={() => {}}
        occasion="Birthday"
        setOccasion={() => {}}
        availableTimes={["17:00", "18:00"]}
        handleSubmit={mockSubmit}
      />
    );
    const button = screen.getByRole("button", {
      name: /On Click/i, // تغییر داده شد
    });
    expect(button).toBeEnabled();
  });

  test("form submission calls handleSubmit with valid data", async () => {
    const mockSubmit = jest.fn();

    function Wrapper() {
      const [date, setDate] = useState("");
      const [time, setTime] = useState("17:00");
      const [guests, setGuests] = useState(1);
      const [occasion, setOccasion] = useState("");

      return (
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          availableTimes={["17:00", "18:00"]}
          handleSubmit={mockSubmit}
        />
      );
    }

    render(<Wrapper />);

    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2025-12-14" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });

    const button = screen.getByRole("button", {
      name: /On Click/i, // تغییر داده شد
    });

    await waitFor(() => expect(button).not.toBeDisabled());

    fireEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2025-12-14",
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    });
  });
});
