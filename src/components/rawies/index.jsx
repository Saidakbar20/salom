import React from 'react'
import julie from '../../assets/julie.png'
import wesley from "../../assets/wesley.png"
import anthony from "../../assets/anthony.png"

export default function Rewievs() {
  return (
<section className="rewievs">
        <div className="container">
                <div className="rewievs-inner">
                        <h2 className="text-title">
                        The Reviews are In
                        </h2>
                        <div className="img">
                                <img src={julie} alt="julie" className='img'/>
                                <img src={wesley} alt="wesley" className='img'/>
                                <img src={anthony} alt="anthony" className='img'/>
                        </div>
                </div>
        </div>
</section>
  )
}
