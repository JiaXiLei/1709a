import React from 'react'

import './style.less'
import { Table } from 'antd';
import { api } from '@/utils/api'
import { connect } from 'react-redux'
import { postAxios } from '@/utils/request'

export default @connect(state=>{
        const { listwithData } = state.home
        return{ 
            listwithData,
        }
},{

})
class Pagination extends React.Component {

    componentDidMount() {

        postAxios(api.listpage, {page: 1})
            .then(res => {
                console.log(res)
                
         })
    }

    onChange = (pagination) => {

        // postAxios(api.listpage, { page: pagination.current, limit: 6 })
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             data: res.result.list,
        //             total: res.result.count,
        //         })
        //  })
    }

    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'id',
                render: text => <span>{text}</span>,
            },
            {
                title: '年龄',
                dataIndex: 'tags',
            },
            {
                title: '地址',
                dataIndex: 'title',
            },
        ]
        const { listwithData } = this.props
        return (
            <div className='home-listwithpage'>
                <Table
                    columns={columns}
                    dataSource={listwithData}

                    // 分页设置
                    pagination={{
                        pageSize: 6,  //每页几条数据
                        total: Number(6),  //多少条数据，默认给你分配多少页
                    }}
                    rowKey={v => v.id}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}