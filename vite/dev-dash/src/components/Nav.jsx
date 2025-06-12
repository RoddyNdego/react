import { Link } from "react-router-dom"

function Nav() {
    return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/devteam/Roddy">Roddy</Link>
        <Link to="/devteam/Anorme">Anorme</Link>
        <Link to="/devteam/Karana">Karana</Link>
      </nav>
    )
}

export default Nav;