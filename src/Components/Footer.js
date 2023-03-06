import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footerUl">
                <li> <NavLink className="navLink" to="/Contact">&hearts; &hearts; &hearts; &hearts;</NavLink> </li>
            </ul>
        </div>
    );
}

