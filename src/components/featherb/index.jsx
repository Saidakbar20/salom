import "./index.css"
import bg from '../../assets/korinish.png'
import icon from '../../assets/icon.png'
export const Floyd = () => {
        return (
                <section className="floyd">
                        <div className="container">
                                <div className="flyod-inner">
                                        <img src={bg} alt="bg" />
                                        <div className="left">
                                                <img src={icon} alt="icon" className="img"/>
                                                <h3 className="div-box">
                                                Floyd Furniture Meets Feather Flexibility
                                                </h3>
                                                        <button className="btn">
                                                        Explore Floyd Furniture
                                                        </button>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
