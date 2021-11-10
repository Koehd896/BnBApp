import React from 'react';
import { connect } from 'react-redux';

class RoomInput extends React.Component {

    constructor() {
        super();
        this.state = {
            title: ""
        }
    }

    

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addRoom(this.state.title)
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type="text" 
                        name="title"
                        id="title" 
                        onChange={this.handleChange} >
                    </input>
                    <input type="submit" value="List Room" ></input>
                </form>
            </div>
        )
    }

}


export default RoomInput;