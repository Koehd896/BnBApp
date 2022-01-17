import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">B and B</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink to="/rooms" className="nav-link">Browse Rooms <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/rooms/new" className="nav-link">List a Room</NavLink>
                </li>
                { props.user.name ? 
                    <>
                        <li className="nav-item" onClick={props.logout}>
                            <div className="nav-link">Log Out</div>
                        </li>
                        <li className="nav-item">
                                <NavLink to="/bookings" className="nav-link">My Rooms</NavLink>
                        </li> 
                    </>
                    :
                    <>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                        </li>
                    </>
                }
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return { user: state.usersReducer.user }
}

const mapDispatchToProps = (dispatch) => {
    return { logout: () => dispatch({type: "LOGOUT_USER"}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);