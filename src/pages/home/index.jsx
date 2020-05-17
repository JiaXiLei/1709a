import React from 'react';

import './style.less'
import { connect } from 'react-redux'

import Nav from '@@/Nav'
import Routers from './router'

export default @connect(state => {
    const { home } = state
    return {
        home: home,
    }
})
class Home extends React.PureComponent {

    componentDidMount() {

        if (!this.props.home.user) {
            this.props.history.push('/login')
        }
    }
    render() {
        const { user } = this.props.home
        return (
            <div className="pages-home">
                <header>{user}</header>
                <div className='pages-cont'>
                    <Nav />
                    <Routers />
                </div>
            </div>
        )
    }
}