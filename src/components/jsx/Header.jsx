import { Link } from "react-router-dom"
import Login from "./Login";
import ReactDOM from 'react-dom';

const Header = () => {

    const renderlogin = (type) => {
        console.log("render " + type);
        ReactDOM.render(<Login type={type} />, document.querySelector(".leftpart"))
    }
    return (
        <header>
            <div className="logo">

                <div className="firstheader" >
                    <span className="burger"  >
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </span>
                </div>
                <h1>Open Knowledge</h1>
            </div>
            <nav className="navcontainer">
                <ul>
                    <Link to='/' className="navlink"  >  <li>Home</li></Link>
                    <Link to='/' className="navlink"  >  <li>About</li></Link>
                    <Link to='/' className="navlink"  >  <li>Pricing</li></Link>
                    <li className="navlink" onClick={() => renderlogin("login")} >Login</li>
                    <li className="navlink" onClick={() => renderlogin("signin")}>SignUp</li>


                </ul>
            </nav>

        </header>
    )
}
export default Header