import React, { Component } from 'react';
import '../styles/loremstyle.css'; 

class Lorem extends Component {
    render() {
        return (
            <div className="loremborder">
                <h1 className="loremh">Lorem Ipsum</h1>
                <p className="loremp">{this.props.quote}</p>
            </div>
        );
    }
}

export default Lorem;
