import './App.css'
import Grid from '@material-ui/core/Grid'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import { DragDropContext } from 'react-beautiful-dnd'
import useScenarioSaver from './hooks/useScenariosSaver'

const App = () => {
  const { onDragEnd, scenarios, savedScenarios } = useScenarioSaver()
  
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
