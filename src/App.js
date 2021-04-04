import './App.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import { DragDropContext } from 'react-beautiful-dnd'
import moment from 'moment'

export const GRID = 8

export const getListStyle = isDragging => ({
  background: isDragging ? 'lightblue' : '#f2f1f0',
  padding: GRID,
})

export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: GRID * 2,
  margin: `0 0 ${GRID}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'white',

  // styles we need to apply on draggables
  ...draggableStyle
})

export const getScenarioDateString = ( scenarioDate ) => {
  const date = scenarioDate.toUpperCase()
  return moment(date).format("DD-MMM-YY").toString()
}

const SCENARIOS_URL = 'https://my-json-server.typicode.com/fiveai-fe/api/scenarios'

const App = () => {
  const [scenarios, setScenarios] = useState()
  const [savedScenarios, setSavedScenarios] = useState([])

  useEffect(() => {
    axios
      .get(SCENARIOS_URL)
      .then((resp) => {
        localStorage.setItem('five-ai-scenarios', resp.data)
        setScenarios(resp.data)
      })
  }, [])

  const onDragEnd = () => {}

  return (
    <div className='layout-width-constraint mv0 pv0'>
      <div className='w-100 bb b--black mb3'>
        <h2 className='mb2' >Scenario Saver</h2>
      </div>
      <DragDropContext {...{ onDragEnd }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <LeftPanel {...{ scenarios }} />
          </Grid>
          <Grid item xs={6}>
            <RightPanel {...{ savedScenarios }} />
          </Grid>
        </Grid>
      </DragDropContext>
    </div>
  )
}


export default App
