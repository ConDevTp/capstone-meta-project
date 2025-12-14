// src/App.js
import { Route, Routes } from "react-router";
import HomePage from "./components/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./GlobalStyle.css";
import ConfirmedBooking from "./components/Bookings/ConfirmedBooking";
import BookingPage from "./components/Bookings/BookingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
