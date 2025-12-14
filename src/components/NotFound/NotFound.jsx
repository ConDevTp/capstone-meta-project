import { Link } from "react-router";
import "./notfound.css";

const NotFound = () => {
  return (
    <section className="notfound">
      <h2> Page NotFound </h2>
      <p className="mt-4"> We Cant Find AnyThing In This Link. </p>
      <Link to="/">
        <button aria-label="GoHome" className="mt-4">
          {" "}
          Go Home{" "}
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
