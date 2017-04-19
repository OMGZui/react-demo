/**
 * Created by shengj on 2017/4/18.
 */
import React, {Component} from 'react';

import Header from './Header';
import Item from './Item';
class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    list() {
        return this.props.todos.map(function (todo, index ) {
            return (
                <Item key={index} {...todo} {...this.props} />
            )
        }, this);
    }

    render() {
        return (
            <table>
                <Header/>
                <tbody>
                    {this.list()}
                </tbody>
            </table>
        )
    }
}

export default Index