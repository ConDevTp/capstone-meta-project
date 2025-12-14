// src/components/Bookings/BookingPage.test.js
import { initializeTimes, updateTimes } from "./BookingPage";

// Mock fetchAPI
const mockFetchAPI = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  global.fetchAPI = mockFetchAPI;
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
