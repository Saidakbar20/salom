import "./index.css";
import img from "../../assets/bussines.png";
export const Bussines = () => {
  return (
    <section className="bussines">
      <div className="container">
        <div className="bussines-inner">
          <div className="right">
            <h3 className="bussines-title">
              Furniture for business, made simple.
            </h3>
            <p className="bussines-paragraph">
              Say goodbye to cost, complexity, and commitment of furniture.
              Feather makes it easy with affordable rental plans, white glove
              delivery and best-in-class account service.
            </p>

            <a href="#" className="bussines-link">
              Visit Feather For Business
            </a>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
