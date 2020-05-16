import React from 'react';

import { Table, Button } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'

export default @connect(state => {
    return {}
},
    {
        addData: option => {
            return {
                type: 'ADD_DATA',
                payload: option
            }
        }
    })
class Shopping extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios('./shopping.json')
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }

    addData = option => {
        this.props.addData(option)
    }

    render() {
        const { data } = this.state
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '名称',
                dataIndex: 'title',
            },
            {
                title: '价格',
                dataIndex: 'price',
                return: (v) => {
                    return <span>￥：{v.price}</span>
                }
            },
            {
                title: '操作',
                render: (v) => {
                    return <Button onClick={() => { this.addData(v) }} type='primary'>添加购物车</Button>
                }
            }
        ]
        return (
            <div>
                <h1>菜单列表</h1>
                <Table
                    rowKey={(v) => v.id}
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                />
            </div>
        )
    }
}