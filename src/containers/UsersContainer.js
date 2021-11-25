import React from 'react';
import Signup from '../components/Signup';
import { postUser } from '../actions/userActions';
import { connect } from 'react-redux';

class UsersContainer extends React.Component {
    render() {
        return(
            <div>
                <Signup postUser={this.props.postUser}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { postUser: (user) => dispatch(postUser(user)) }
}

export default connect(null, mapDispatchToProps)(UsersContainer);