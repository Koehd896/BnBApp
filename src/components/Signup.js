import React from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit this.state:", this.state)
        this.props.postUser(this.state);
        this.setState({
            name: "",
            password: ""
        })
        this.props.history.push("/rooms")
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} name="name" type="text"></input>
                    <input onChange={this.handleChange} name="password" type="password"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup);