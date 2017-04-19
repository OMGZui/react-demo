/**
 * 主页
 */
import React, {Component} from 'react';
import http from '../utils/http';

import {Layout} from 'antd';

import SideBar from './layout/SiderBar';
import MyHeader from './layout/Header';
const {Header, Sider, Content} = Layout;

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            user: []
        }
    }

    loadData() {
        const context = this;
        http.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            context.setState({
                user: res,
            });
        });

    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    ul(users){
        return(
            users.map(function (value, item) {
                return(
                    <li key={item}>{item}. {value.name}</li>
                )
            })
        )
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const users = this.state.user;
        const user = this.ul(users);
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
                        <ul>{user}</ul>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
