import React from 'react'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'

const getScenarioDateString = ( scenarioDate ) => {
  const date = scenarioDate.toUpperCase()
  return moment(date).format("DD-MMM-YY").toString()
}

const Scenario = ({ imageurl, name, date, creator }) => (
  <>
    <img src={ imageurl } height={ 60 } alt='scenario photograph'/>
    <div className='flex flex-column justify-between w-100 pl2'>
      <Grid container className='w-100 pb3'>
        <Grid item xs={ 8 } >{ name }</Grid>
        <Grid item xs={ 4 } className='tr'>{ getScenarioDateString(date) }</Grid>
      </Grid>
      <div>{ creator }</div>
    </div>
  </>
)

export default Scenario