import ChartColumn from "../Core/ChartColumn/ChartColumn";
import ChartPie from "../Core/ChartPie/ChartPie";
import Grid from "../Core/Grid/Grid"
import React from 'react'
import Classes from './Form.module.scss'

const Form=()=>{
  
  return(<>
  <Grid/>
  <div className={Classes.chartWrapper}>
  <ChartColumn/>
  <ChartPie/>
  </div>
     </>)
}

export default Form;