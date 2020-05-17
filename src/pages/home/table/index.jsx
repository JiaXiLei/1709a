import React from 'react';

import './style.less'
import { getAxios, postAxios } from '@/utils/request'
import { connect } from 'react-redux'
import { getTableData } from '@/action/home'
import { Table, Button } from 'antd'
const errorImg = 'https://upload.jianshu.io/users/upload_avatars/20387299/3023c117-3ccb-40d5-bc01-07ce81402590.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'

export default @connect(state => {
    const { tableData } = state.home
    return {
        tableData,
    }
}, {
    getTableData,
})
class Tbales extends React.Component {

    componentDidMount() {
        const url = '/api/home/v5/findUser'
        getAxios(url)
            .then(res => {
                this.props.getTableData(res.data.users)
            })
    }
    setImgurl = e => {
        e.target.setAttribute('src', errorImg)
    }
    render() {
        const { tableData } = this.props
        console.log(tableData)

        const columns = [
            {
                title: 'hospital',
                dataIndex: 'hospital',
                render: (v) => !v ? <img src={errorImg} alt="" /> : <img src={v} onError={this.setImgurl} alt="" />,
                // render: (v) => <img src={v} onError={this.setImgurl} alt="" />
            },
            {
                title: 'name',
                dataIndex: 'name',
            },
            {
                title: 'age',
                dataIndex: 'age',
            },
            {
                title: 'msg',
                dataIndex: 'msg',
            },
            {
                title: '操作',
                render: (v) => <a>delete</a>
            },
        ];
        return (
            <div className="home-table">
                <Table
                    rowKey={v => v.id}
                    dataSource={tableData}
                    columns={columns}
                    pagination={{
                        pageSize: 6,  //每页几条数据
                        total: Number(tableData.length),  //多少条数据，默认给你分配多少页
                    }}
                />
            </div>
        )
    }
}