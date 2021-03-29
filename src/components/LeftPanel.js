import SearchBox from './SearchBox'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'

const getScenarioDateString = ( scenarioDate ) => {
  const date = scenarioDate.toUpperCase()
  return moment(date).format("DD-MMM-YY").toString()
}

const LeftPanel = ({ scenarios }) => (
  <div>
    <SearchBox />
    <div className='vh-75 ba overflow-scroll'>
      {scenarios && scenarios.map(({ id, imageurl, name, date, creator }) => (
        <div key={id} className='pa2 bb flex justify-between'>
          <img src={ imageurl } height={ 60 } alt='scenario photograph'/>
          <div className='flex flex-column justify-between w-100 pl2'>
            <Grid container className='w-100 pb3'>
              <Grid item xs={ 8 } >{ name }</Grid>
              <Grid item xs={ 4 } className='tr'>{ getScenarioDateString(date) }</Grid>
            </Grid>
            <div>{ creator }</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default LeftPanel
