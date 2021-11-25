import React from 'react';
import uuid from 'react-uuid';

class RoomInput extends React.Component {

    constructor() {
        super();
        this.state = {
            uuid: uuid(),
            title: "",
            bedrooms: 0,
            bathrooms: 0,
            price: 0,
            image: ""
        }
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postRoom(this.state)
        this.setState({
                uuid: uuid(),
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
                        placeholder="name..."
                        onChange={this.handleChange} >
                    </input>
                    <input
                        type="text"
                        name="bedrooms"
                        id="bedrooms"
                        placeholder="bedrooms..."
                        onChange={this.handleChange} >
                    </input>
                    <input
                        type="text"
                        name="bathrooms"
                        id="bathrooms"
                        placeholder="bathrooms..."
                        onChange={this.handleChange} >
                    </input>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="price..."
                        onChange={this.handleChange} >
                    </input>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="image url..."
                        onChange={this.handleChange} >
                    </input>
                    <input type="submit" value="List Room" ></input>
                </form>
            </div>
        )
    }

}


export default RoomInput;