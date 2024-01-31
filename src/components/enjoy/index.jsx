import "./index.css";
import house from "../../assets/room.png"
export const Enjoy = () => {
  return (
    <section className="enjoy">
      <div className="container">
        <div className="enjoy-inner">
          <div className="mini-box-left">
            <h3 className="enjoy-title">
              Enjoy a fully furnished space in less than week
            </h3>
            <p className="enjoy-paragraph">
              Feather furniture is available to be delivered and assembled in
              New York City, Los Angeles and San Francisco.
            </p>
            <a href="#" className="enjoy-link">
            Explore Furniture
            </a>
          </div>
          <div className="img-box">
                <img src={house} alt="" className="img-enjoy" />
          </div>
        </div>
      </div>
    </section>
  );
};
