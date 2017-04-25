/**
 * Created by shengj on 2017/4/24.
 */

import React, {Component} from 'react';

class Sass extends Component {

    render() {
        const world = (<span className="world">world</span>);
        const nav = (
            <a>O.O</a>
        );

        return (
            <div>
                <span className="hello">
                    hello
                    {nav}
                </span>
                {world}
                <p className="height-30"/>
                <span className="success">success</span><span className="weight-10"/>
                <span className="error">error</span><span className="weight-10"/>
                <span className="warning">warning</span>
                <p className="height-30"/>
                <span className="if-else">if-else</span>
                <p className="height-30"/>
                <span className="func">func</span>
            </div>

        )
    }
}

export default Sass