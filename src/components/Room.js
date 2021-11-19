import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Room extends Component {

    render() {
        return (
            // <div className="room-card" >
            //     <div className="room-title">Room Name: {this.props.room.title}</div>                       
            //     <div className="room-bedrooms">Bedroom(s): {this.props.room.bedrooms}</div>
            //     <div className="room=bathrooms">Bathroom(s): {this.props.room.bathrooms}</div>
            //     <div className="room=price">Price: ${this.props.room.price}</div>                   
            //     <div className="room=image"><img src={this.props.room.image} alt="room"></img></div>
            //     
            // </div>
        <div className="col-sm">
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src={this.props.room.image} className="card-img-top" alt="room"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.room.title}</h5>
                    <p className="card-text">$ {this.props.room.price}</p>
                    <button className="btn btn-primary"><NavLink to={`/rooms/${this.props.room.uuid}`} className="btn-text">See More</NavLink></button>
                </div>
            </div>
        </div>
        )
    }
}

export default Room;