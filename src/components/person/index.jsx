import "./index.css"
import person from "../../assets/odam.png"
export const Person = () => {
        return (
                <div className="person">
                <img src={person} alt="" />
                <p className="paragraph">
                Feather is the stress-free way to furnish your home
                </p>
                <button className="ap-btn">
                Shop Furniture
                </button>
        </div>

        )}