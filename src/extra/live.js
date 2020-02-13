import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello how are you?</h1>
                <Car brand="M" />
            </div>
        );
    }
}
export default Garage;