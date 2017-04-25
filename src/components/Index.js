/**
 * 主页
 */

//react
import React, {Component} from 'react';

//antd
import {Layout} from 'antd';

//组成
import SideBar from './layout/SiderBar';
import MyHeader from './layout/Header';
import MyContent from './project/Index';

//Layout
const {Header, Sider, Content} = Layout;


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const collapsed = this.state.collapsed;
        return (
            <Layout style={{height: '100%'}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"/>
                    <SideBar collapsed={collapsed}/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <MyHeader toggle={this.toggle.bind(this)} collapsed={collapsed}/>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        <MyContent/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
