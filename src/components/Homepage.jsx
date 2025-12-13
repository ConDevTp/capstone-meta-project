import CallToAction from "./CallToAction/CallToAction";
import Chicago from "./Chicago/Chicago";
import CustomersSay from "./CustomersSay/CustomersSay";
import Specials from "./Specials/Specials";

const HomePage = () => {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
};

export default HomePage;
