// BookingPage.js
import BookingForm from "./BookingForm";
import Content from "../Content/Content";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <Content>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </Content>
  );
};

export default BookingPage;
