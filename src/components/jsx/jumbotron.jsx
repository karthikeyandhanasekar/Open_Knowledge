import React from "react"
import { Link } from "react-router-dom"
import poster from '../assets/images/poster.png'

const JumboTron = () => {
    return (
        <React.Fragment>
            <div className="leftpart">
                <blockquote><q>
                    Show me a family of readers, and I will show you the people who move the world
                </q>  </blockquote>
                <p>-- Napoleon Bonaparte</p>
                <br />
                <Link to=""><button>Let's Started</button></Link>
                <br /> <br />


                <Link to="" className="orlogin" >Or log in to continue</Link>
            </div>
            <div className="rightpart">
                <picture>
                    <img src={poster} alt="bibliophile.png" />
                </picture>

            </div>
        </React.Fragment>
    )
}
export default JumboTron