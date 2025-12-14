import { useReducer } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./components/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookingPage from "./components/Bookings/BookingPage";
import "./GlobalStyle.css";

// تابع برای مقدار اولیه زمان‌ها
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

// reducer برای زمان‌ها
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // اینجا میتونی بر اساس action.date زمان‌ها رو فیلتر یا تغییر بدی
      return initializeTimes();
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
