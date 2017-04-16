/**
 * Created by shengj on 2017/4/15.
 */
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div>
                <Link to="/">App</Link>
                <h2>About</h2>
            </div>
        )
    }

}

export default About;
