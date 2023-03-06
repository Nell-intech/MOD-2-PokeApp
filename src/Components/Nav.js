import { Link, NavLink } from 'react-router-dom'

export default function Nav() {

    return (

        <header>
            <nav className="navBar">
                <ul className="navUl">
                    <li> <NavLink className="navLink" to="/">Home</NavLink> </li>
                    <li className="navLink"> | </li>
                    {/* has active class that we can use to style as opposed to the <Link></Link> */}
                    <li> <NavLink className="navLink" to="/pokedex">Go to Your Pokedex!</NavLink> </li>
                    <li className="navLink"> | </li>
                    <li> <NavLink className="navLink" to="/pokeindex">Enter Poke Index</NavLink> </li>
                    <li className="navLink"> | </li>
                    <li> <NavLink className="navLink" to="/Contact">Contact</NavLink> </li>
                    {/* Presents all stocks. When you click on one stock it will redirect page to fill that one stock ..  /stock:symbol */}
                </ul>
            </nav>
        </header>
    );
}
