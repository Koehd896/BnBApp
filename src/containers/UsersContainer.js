import React from 'react';
import Signup from '../components/Signup';

class UsersContainer extends React.Component {
    render() {
        return(
            <div>
                <Signup/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {newUser: (user) => dispatch({type: "NEW_USER", action: user}) }
}

export default UsersContainer;