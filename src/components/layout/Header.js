/**
 * 头
 */
import React, {Component} from 'react';
import {Icon} from 'antd';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
            />
        )
    }
}

export default Header