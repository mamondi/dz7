import React, { Component } from 'react';
import '../styles/buttonstyle.css'; 

class ManagerButton extends Component {
    render() {
        return (
            <button onClick={this.props.toggleQuote}>
                {this.props.showQuote ? 'Hide Quote' : 'Show Quote'}
            </button>
        );
    }
}

export default ManagerButton;
