import React from 'react';
import { connect } from 'react-redux';
import { postRoom } from '../actions/roomActions';

class RoomInput extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "",
            bedrooms: 0,
            bathrooms: 0,
            price: 0,
            image: ""
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
        this.props.postRoom(this.props.rooms.last)
        this.setState({
                title: "",
                bedrooms: 0,
                bathrooms: 0,
                price: 0,
                image: ""
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