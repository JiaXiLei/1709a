import React from 'react';

import './style.less'
import echarts from 'echarts'
import { EchartsData } from './data'

export default class AppEcharts extends React.Component {

    componentDidMount() {

        var myChartLine = echarts.init(document.querySelector('#line'));
        myChartLine.setOption(EchartsData.LineOption);

        var myChartArea = echarts.init(document.querySelector('#area'));
        myChartArea.setOption(EchartsData.AreaOption);

        var myChartBar = echarts.init(document.querySelector('#bar'));
        myChartBar.setOption(EchartsData.BarOption);

        var myChartPie = echarts.init(document.querySelector('#pie'));
        myChartPie.setOption(EchartsData.PieOption);
    }
    render() {
        return (
            <div className="home-echarts">
                <div id="line"></div>
                <div id="area"></div>
                <div id="bar"></div>
                <div id="pie"></div>
            </div>
        )
    }
}