import React from "react"
import Header from "./Header"
import JumboTron from "./jumbotron"


const Home = () => {


    return (
        <React.Fragment>
            <Header />
            <div className="parts">
                <JumboTron />
            </div>
        </React.Fragment>

    )
}
export default Home