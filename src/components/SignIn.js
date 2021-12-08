import React from 'react';

class Signin extends React.Component {
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
        this.props.postAuth(this.state);
        this.setState({
            name: "",
            password: ""
        })
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

export default Signin;