import "./index.css";
import living from "../../assets/living-room.png"
import bedroom from "../../assets/bedroom.png"
import office from "../../assets/office.png"
import dining from "../../assets/dining-room.png"
export const Room = () => {
return (
 <section className="room">
        <div className="container">
                <div className="room-inner">
                        <h2 className="text-title">
                        Shop by Room
                        </h2>
                        <div className="img-box">
                        <ul className="room-list">
                                <li className="room-item">
                                        <img src={living} alt="room" />
                                </li>
                                <li className="room-item">
                                        <img src={bedroom} alt="room" />
                                </li>
                                <li className="room-item">
                                        <img src={office} alt="room" />
                                </li>
                                <li className="room-item">
                                        <img src={dining} alt="room" />
                                </li>
                        </ul>
                        </div>
                </div>
        </div>
 </section>
)
}
