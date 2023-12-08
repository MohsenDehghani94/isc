// import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts/highstock';
import PieChart from "highcharts-react-official";
import React, { useState, useEffect } from 'react';

import classes from './ChartColumn.module.scss';



const ChartColumn=()=>{
  useEffect(()=>{
    getData();
  },[]);  
  const [gridData,SetGridData]=useState([]);

  const getData= ()=>{fetch('/data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then((data)=> {
        SetGridData(data);
      }).catch(error=>{
        alert('Fetch data failed')
      })
  }
  


  const dataList=gridData?.rows?.map(item=>{
    return {
      name:`${item.name }   
       ${ item.date}` ,
      y: item.amount,
      // x: item.date,
      // amount":50000,"date":"1402.5.28" }
    }
  });

  const options = {
    title: {
      align: 'center',
      text: 'نمودار میله ای'
    },
    chart: {
      type: "column"
    }, 
    subtitle: {
      align: 'left',
      text: 'hhh'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
  
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
            color: 'grey',
            font: '20px Arial, sans-serif'
        }
    }
    },
    yAxis: {
      title: {
        text: 'جدول زمان و مبلغ',
        margin: 60,
        style: {
          color: 'grey',
          font: '20px Arial, sans-serif',
          
  
      }
      },
  
    labels: {
        style: {
            color: 'grey',
            font: '20px Arial, sans-serif'
        }
    }
  
  
    },
    series: [
      {
        name: 'banks',
        colorByPoint: true,
        data:dataList?dataList:null
      }
    ],
 
  };

  return(<>
  <div className={classes.container}>
    <PieChart highcharts={Highcharts} options={options}  className={classes.chart}  />
   </div>
  </>)
}

export default ChartColumn;




