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

    ul(users) {
        return (
            users.map(function (value, item) {
                return (
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
        const world = (<span className="world">world</span>);
        const nav = (
            <a>O.O</a>
        );
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
                        <p className="height-30"/>
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
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
