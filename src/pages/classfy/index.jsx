import React from 'react';

import './style.less'  //引用样式
import './rem'
import axios from 'axios'

export default class Classfy extends React.PureComponent {

    state = {
        navData: [],
        status: '',
        shoppingData: [],
    }
    // 第一次拿取数据
    componentDidMount() {
        axios('./category.json')
            .then(res => {
                console.log(res.data.List)
                this.setState({
                    navData: res.data.List,
                    status: res.data.List[0].cate_id,
                    shoppingData: res.data.List[0].children,
                })
            })
    }
    // 点击左侧导航，获取右侧数据
    setShoppingData = (option) => {
        const { navData } = this.state
        navData.map(res => {
            if (res.cate_id == option) {
                this.setState({
                    shoppingData: res.children,
                    status: option
                })
            }
        })
    }

    render() {
        const { navData, status, shoppingData } = this.state
        console.log(shoppingData)
        return (
            <div className='pages-classfy'>
                <h2>全部分类</h2>
                <div>
                    <div className='classfy-left'>
                        {
                            navData ?
                                navData.map(res => {
                                    return (
                                        <p
                                            key={res.cate_id}
                                            className={res.cate_id == status ? 'active' : ''}
                                            onClick={() => { this.setShoppingData(res.cate_id) }}
                                        >
                                            {res.cate_name}
                                        </p>
                                    )
                                })
                                : '暂无数据'
                        }
                    </div>
                    <div className="classfy-right">
                        {
                            shoppingData ?
                                shoppingData.map(res => {
                                    return (
                                        <dl key={res.child_id}>
                                            <dt><img src={res.picture} alt="" /></dt>
                                            <dd>{res.name}</dd>
                                        </dl>
                                    )
                                })
                                : "暂无数据"
                        }
                    </div>
                </div>
            </div>
        )
    }
}