// import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts/highstock';
import PieChart from "highcharts-react-official";
import React, { useState, useEffect } from 'react';

import classes from './ChartPie.module.scss';



const ChartPie=()=>{
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

  const options =  { chart: {

    plotBackgroundColor: null,

    plotBorderWidth: null,

    plotShadow: false,

    type: 'pie'

  },

  title: {

    text: 'نمودار دایره ای زمان و مبلغ',

    align: 'left',
    margin: 10,
    style: {
      color: 'grey',
      font: '20px Arial, sans-serif',
      

  },
  
  },

  tooltip: {

    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

  },

  accessibility: {

    point: {

      valueSuffix: '%'

    }

  },

  plotOptions: {

    pie: {

      allowPointSelect: true,

      cursor: 'pointer',

      dataLabels: {

        enabled: true,

        format: '<span style="font-size: 2rem"><b>{point.name}</b></span><br>' +

          '<span style="opacity: 0.6 ;font-size: 2rem">{point.percentage:.1f} %</span>',

        connectorColor: 'rgba(128,128,128,0.5)'

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

export default ChartPie;




