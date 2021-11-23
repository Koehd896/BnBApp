import React from React;

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventdefault()
        // fetch call?

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
                    <input onChange={this.handleChange} name="username" type="text"></input>
                    <input onChange={this.handleChange} name="password" type="password"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Signup;