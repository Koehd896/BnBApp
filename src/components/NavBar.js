import { NavLink } from 'react-router-dom';

export function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">B and B</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink to="/rooms" className="nav-link">See Rooms <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/rooms/new" className="nav-link">List a Room</NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}