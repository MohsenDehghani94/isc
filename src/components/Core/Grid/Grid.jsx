import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import classes from './Grid.module.scss';

const girdRowHover ={"& .MuiDataGrid-row:hover": {backgroundColor: "skyblue"}};
const Grid=()=> {
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
  return (
    <div className={classes.container} >
     {gridData ?
      <DataGrid sx={girdRowHover}
       rows={gridData.rows?gridData.rows :[]} columns={gridData.columns?gridData.columns :[]} className={classes.grid}  hideFooterPagination  /> :
      <span className={classes.empty}>There is not any data</span> } 
    </div>
  ); 
}
export default Grid; 