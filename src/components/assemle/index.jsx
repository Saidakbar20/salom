import "./index.css";
import img from "../../assets/assemble.png";
export const Assemble = () => {
  return (
    <section className="assemble">
      <div className="container">
        <div className="assemble-inner">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <h3 className="assemble-title">
              Furniture for business, made simple.
            </h3>
            <p className="assemble-paragraph">
              Say goodbye to cost, complexity, and commitment of furniture.
              Feather makes it easy with affordable rental plans, white glove
              delivery and best-in-class account service.
            </p>

            <a href="#" className="assemble-link">
              Visit Feather For Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
