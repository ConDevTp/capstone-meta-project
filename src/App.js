import { Route, Routes } from "react-router";
import HomePage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./GlobalStyle.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
