/**
 * 侧边栏
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class SiderBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }

    handleClick = (e) => {
        // console.log('Clicked: ', e);
        this.setState({current: e.key});
    };

    onOpenChange = (openKeys) => {
        const collapsed = this.props.collapsed;
        if (collapsed) {
            return false;
        }
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({openKeys: nextOpenKeys});
    };
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    };

    render() {
        return (
            <Layout>
                <Menu
                    mode="inline"
                    selectedKeys={[this.state.current]}
                    openKeys={this.state.openKeys}
                    // style={{width: 200}}
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick }
                    theme="dark"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                             <Icon type="mail"/>
                             <span className="nav-text">项目</span>
                         </span>
                        }
                    >
                        <Menu.Item key="1"><Link to='/sass'>sass体验</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/task'>task清单</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="pay-circle"/>
                            <span className="nav-text">基金</span>
                        </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                            <Icon type="user"/>
                            <span className="nav-text">用户</span>
                        </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout>

        )
    }
}

export default SiderBar