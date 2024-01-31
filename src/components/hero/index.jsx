import "./index.css";
import room from "../../assets/room.png";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left-box">
            <h1 className="text-title">Curated and Convenient</h1>
            <p className="text-paragraph">
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a “feather”
            </p>
            <button className="btn">Get Started</button>
          </div>
          <div className="hero-right-box">
            <img src={room} alt="img" className="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
