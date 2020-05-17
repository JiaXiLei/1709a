import React from 'react';

import { Menu } from 'antd'
import { Link } from "react-router-dom";
import './style.less'

export default class Nav extends React.Component {

    render() {
        const { SubMenu } = Menu;

        return (
            <div className="home-nav">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: '100%', height: '100%' }}
                    defaultSelectedKeys={['2']}
                    defaultOpenKeys={['sub2']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title='图表'
                    >
                        <Menu.Item key="1"><Link to='/home-Echarts'>Echarts</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title='表格'
                    >
                        <Menu.Item key="2"><Link to='/home-Table'>table</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/home-Add'>add</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title='分页'
                    >
                        <Menu.Item key="4"><Link to='/home-Paginations'>pagination</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}