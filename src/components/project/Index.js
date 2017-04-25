/**
 * Content
 */
import React, {Component} from 'react';
import http from '../../utils/http';

import { Table } from 'antd';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    loadData() {
        const context = this;
        http.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            context.setState({
                users: res,
            });
        });
    }

    componentDidMount() {
        this.loadData();
    }

    render (){
        const data = this.state.users;
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '个人主页',
            dataIndex: 'website',
            key: 'website',
        }];

        return (
            <Table rowKey={record => record.id} rowSelection={{}} columns={columns} dataSource={data} />
        )
    }
}

export default Index