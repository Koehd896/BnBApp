import React from 'react';
import Signup from '../components/Signup';
import { postUser } from '../actions/userActions';

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
    return {postUser: (user) => dispatch(postUser(user))}
}

export default UsersContainer;