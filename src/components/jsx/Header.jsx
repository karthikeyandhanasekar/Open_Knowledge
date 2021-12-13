import { Link } from "react-router-dom"


const Header = () => {
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
                    <Link to='/login' className="navlink" ><li>Login</li></Link>
                    <Link to='/signup' className="navlink" ><li>Signin</li></Link>
                </ul>
            </nav>

        </header>
    )
}
export default Header