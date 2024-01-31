import "./index.css"
import purchon from '../../assets/purchon.png'
import my from '../../assets/my.png'
import body from '../../assets/body.png'
import forbes from '../../assets/forbes.png'
import person from "../../assets/odam.png"
import fast from '../../assets/fast.png'
export const Apartment = () => {
        return (
                <section className="apartment">
                        <div className="container">
                                <div className="apartment-inner">
                                        <h2 className="text-title">
                                        Ease the pain of moving from apartment to apartment.
                                        </h2>
                                        <div className="logo">
                                                <img src={purchon} alt="" className="img-apartment"/> 
                                                <img src={my} alt="" className="img-apartment"/>
                                                <img src={body} alt="" className="img-apartment"/>
                                                <img src={forbes} alt="" className="img-apartment"/>
                                                <img src={fast} alt="" className="img-apartment"/>
                                        </div>
                       
                                </div>
                        </div>
                </section>
        )
}