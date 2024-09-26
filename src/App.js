import React, { Component } from 'react';
import './styles/App.css'; 
import Lorem from './components/Lorem';
import ManagerButton from './components/ManagerButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuote: true
        };
    }

    toggleQuote = () => {
        this.setState(prevState => ({
            showQuote: !prevState.showQuote // Зміна логіки для переключення
        }));
    }

    render() {
        return (
            <div>
                {this.state.showQuote && <Lorem quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />}
                <ManagerButton 
                    toggleQuote={this.toggleQuote} 
                    showQuote={this.state.showQuote} 
                />
            </div>
        );
    }
}

export default App;
