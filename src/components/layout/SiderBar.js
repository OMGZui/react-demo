/**
 * 侧边栏
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';

class SiderBar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                </Menu>
            </Layout>
        )
    }
}

export default SiderBar