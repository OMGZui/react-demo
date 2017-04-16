import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="root">
                {this.props.children || "loading..."}
            </div>
        )
    }
}

export default App;
