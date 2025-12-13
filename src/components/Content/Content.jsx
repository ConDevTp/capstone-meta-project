import "./content.css";

const Content = ({ children, className }) => {
  return (
    <section className="main-grid">
      <section className={`content ${className}`}>{children}</section>
    </section>
  );
};

export default Content;
