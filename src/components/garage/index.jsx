import "./index.css";
import img from "../../assets/garage.png";
export const Garage = () => {
  return (
    <section className="garage">
      <div className="container">
        <div className="garage-inner">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="left">
        
            <h3 className="garage-title">Garage Sale - 40% & Up</h3>
            <p className="garage-paragraph">
              Our Garage Sale is open! Savings start at 40% on favorite retired
              pieces. Find dressers, sofas, decor, and more to make the year one
              to remember.
            </p>
            <p className="garage-p">Terms and conditions apply.View here.</p>
            <a href="#" className="garage-link">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
