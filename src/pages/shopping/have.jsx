import React from 'react';

import { Table, Button } from 'antd'
import { connect } from 'react-redux'

export default @connect(state => {
    console.log(state)
    return {
        data: state.data,
        price: state.price,
        number: state.number,
    }
},
    {
        delData: option => {
            return {
                type: 'DELETE_DATA',
                payload: option
            }
        },
        alldelData: option => {
            return {
                type: 'ALL_DELETE_DATA',
                payload: option
            }
        }
    })
class Have extends React.Component {


    alldelData = ()=>{
        this.props.alldelData()
    }
    delData = option =>{
        this.props.delData(option)
    }
    render() {
        const { data, price, number } = this.props
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
            },
            {
                title: '数量',
                dataIndex: 'number',
            },
            {
                title: '操作',
                render: (v) => {
                    return <Button onClick={()=>{this.delData(v)}} type='danger'>删除</Button>
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
                <div className="footer">
                    <p>总数量:{number}</p>
                    <p>总价:{price}</p>
                    <p><button onClick={this.alldelData}>清空购物车</button></p>
                </div>
            </div>
        )
    }
}