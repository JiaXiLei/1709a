import React from 'react';

import './style.less'

import { connect } from 'react-redux'
import { gitHomeNmae } from '@/action/home'

export default @connect(state=>{
    const { home, login } = state
    console.log(home,login)
    return{
        home: home,
        login: login,
        
    }
},{
    gitHomeNmae,
})
class Home extends React.PureComponent{

    btn=()=>{
        this.props.gitHomeNmae('home1111111')
    }
    render(){
        return(
            <div className="pages-home">
                <button onClick={this.btn}>githome</button>
            </div>
        )
    }
}