import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/SignIn';
import { postUser } from '../actions/userActions';
import { postAuth } from '../actions/authActions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

class UsersContainer extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/signup">
                        <Signup postUser={this.props.postUser}/>
                    </Route>
                    <Route exact path="/login">
                        <Signin postAuth={this.props.postAuth}/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        postUser: (user) => dispatch(postUser(user)),
        postAuth: (user) => dispatch(postAuth(user))
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer);