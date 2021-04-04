import React from 'react'
import Grid from '@material-ui/core/Grid'
import {getScenarioDateString} from '../App'

const Scenario = ({ imageurl, name, date: _date, creator }) => {
  const date = getScenarioDateString( _date )

  return (
    <>
      <img src={ imageurl } height={ 60 } alt='scenario photograph'/>
      <div className='flex flex-column justify-between w-100 pl2'>
        <Grid container className='w-100 pb3'>
          <Grid item xs={ 8 } >{ name }</Grid>
          <Grid item xs={ 4 } className='tr'>{ date }</Grid>
        </Grid>
        <div>{ creator }</div>
      </div>
    </>
  )
}

export default Scenario