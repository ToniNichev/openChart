import React, {Component} from 'react';
import styles from './styles.scss';

import OpenChart from '../OpenChart';
import ChatDataConnector from '../OpenChart/ChartDataConnector';

let openchart = {};

class Dashboard extends Component {

  
  constructor(props) {
    super(props);
  }  

  componentDidMount() {
    let openchart = new OpenChart("chartCanvas", 
      {
        'lineWidth': '3',
        'lineColor': '#3DA5ED',
        'fillColor': '#31587D',
        'backgroundColor': '#020202',
        'priceArrow': { 'fillCollor': '#3DA5ED', 'priceColor': '#fffcfc'},
        'grid': {'lineWidth': 0.3, 'lineColor': '#A9A9A9', 'gridStep': 20.0},
      }, new ChatDataConnector()); // attach chart feed

      openchart.requestChartForTimeFrame('TSLA', '1y', null, true, null);
  }


  render() {
    return (
      <div className={styles.wrapper}>
          <canvas id="chartCanvas" className={styles.mainChart} />
      </div>
    );
  }

}

export default Dashboard;