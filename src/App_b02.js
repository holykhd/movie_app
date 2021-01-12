import React from 'react';
import propTypes from 'prop-types';

class App extends React.Component{
    state = {
        count: 0
    }
    // add =() => {this.state.count = 1}
    // minus = () => {this.state.count = -1}
    // case1
    // add =() => {this.setState({count: this.state.count + 1})}
    // minus = () => {this.setState({count: this.state.count - 1})}
    // case2
    add =() => {this.setState(current => ({count: current.count + 1}))}
    minus = () => {this.setState(current => ({count: current.count - 1}))}
    render(){
        return(
            <div>
                <h1>This number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
