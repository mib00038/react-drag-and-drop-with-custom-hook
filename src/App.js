import './App.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

const App = () => {
  const [scenarios, setScenarios] = useState()
  const [selectedScenarios, setSelectedScenarios] = useState([])

  useEffect(() => {
    console.log({scenarios})
  }, [scenarios])

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/fiveai-fe/api/scenarios')
      .then((resp) => {
        localStorage.setItem('five-ai-scenarios', resp.data)
        setScenarios(resp.data)
      })
  }, [])

  return (
    <div className='layout-width-constraint mv0 pv0'>
      <div className='w-100 bb b--black mb3'>
        <h2 className='mb2' >Scenario Saver</h2>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <LeftPanel {...{ scenarios }} />
        </Grid>
        <Grid item xs={6}>
          <RightPanel />
        </Grid>
      </Grid>
    </div>
  )
}


export default App
