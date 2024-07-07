import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
  const option = {
    title: {
      text: 'User Count By Server',
    },
    tooltip: {},
    xAxis: {
      data: ['10.10.10.2', '10.10.10.1', '34.87.25.44'],
    },
    yAxis: {},
    series: [
      {
        name: 'User Count',
        type: 'bar',
        data: [
          { 
            value: 1, 
            itemStyle: { 
              color: 'rgba(188, 111, 248, 0.3)', 
              barBorderColor: 'rgb(188, 111, 248)', 
              barBorderWidth: 1, 
            //   borderRadius: 5 
            } 
          },
          { 
            value: 2, 
            itemStyle: { 
              color: 'rgba(111, 207, 248, 0.5)', 
              barBorderColor: 'rgb(111, 207, 248)', 
              barBorderWidth: 1, 
            //   borderRadius: 5 
            } 
          },
          { 
            value: 1, 
            itemStyle: { 
              color: 'rgba(255, 117, 117, 0.5)',
              barBorderColor: '#EE6666',
              barBorderWidth: 1,
            //   borderRadius: 5 
            } 
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
