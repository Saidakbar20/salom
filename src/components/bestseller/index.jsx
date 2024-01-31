import "./index.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
export const Bestseller = () => {
  return (
    <section className="bestseller">
      <div className="container">
        <div className="best-inner">
                <h2 className="text-title">Shop our Bestsellers</h2>
          <ul className="best-list">
            <li className="best-item">
              <img src={img1} alt="" className="img1" />
            </li>
            <li className="best-item">
              <img src={img2} alt="" className="img1" />
            </li>
            <li className="best-item">
              <img src={img3} alt="" className="img1" />
            </li>
            <li className="best-item">
              <img src={img4} alt="" className="img1" />
            </li>
          </ul>
          <a href="#" className="best-link">
          Shop All Furniture
          </a>
        </div>
      </div>
    </section>
  );
};
