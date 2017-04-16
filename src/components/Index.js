/**
 * 主页
 */
import React, {Component} from 'react';
import {Layout} from 'antd';

import SideBar from './layout/SiderBar';
import MyHeader from './layout/Header';
const {Header, Sider, Content} = Layout;

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <SideBar/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <MyHeader toggle={this.toggle.bind(this)} collapsed={this.state.collapsed}/>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
