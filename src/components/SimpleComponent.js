// Code SimpleComponent Here
import React, { Component } from 'react';

class Simplecomponent extends Component {
 
        state = {
          mood: 'happy'
        }

    handleClick = () => {
        let moody = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({ mood: moody })
    }
    
    render() {
        return (
            <div onClick={this.handleClick}>

            {this.state.mood}
                
            </div>
        );
    }
}

export default Simplecomponent;
