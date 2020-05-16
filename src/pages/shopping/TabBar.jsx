import React from 'react';

import { Menu } from 'antd';

import { Link } from "react-router-dom";

export default class Tabbar extends React.Component {

    render() {
        const { SubMenu } = Menu;
        return (
            <Menu
                style={{ width: '100%', height: '100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span>商品管理</span>}>

                    <Menu.Item key="1"><Link to='/shopping' >购物车</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/have' >已购列表</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation Three</span>}
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}