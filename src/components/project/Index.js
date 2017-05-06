/**
 * Content
 */
import React, {Component} from 'react';
// import http from '../../utils/http';
import http from 'axios';

import { Table } from 'antd';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    loadData() {
        const context = this;
        http.get('http://api.react.lumen.omgzui.pub/api/project').then(function(res) {
            context.setState({
                users: res.data.result,
            });
        });
    }

    componentDidMount() {
        this.loadData();
    }

    render (){
        const data = this.state.users;
        const columns = [{
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '公司名字',
            dataIndex: 'company',
            key: 'company',
        }, {
            title: 'logo',
            dataIndex: 'logo',
            key: 'logo',
        },{
            title: 'token',
            dataIndex: 'token',
            key: 'token',
        },];

        return (
            <Table rowKey={record => record.id} rowSelection={{}} columns={columns} dataSource={data} />
        )
    }
}

export default Index