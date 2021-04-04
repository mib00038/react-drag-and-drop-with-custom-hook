import React from 'react'
import DroppableScenarioList from './DroppableScenarioList'

const RightPanel = ({ savedScenarios }) => (
  <>
    <div style={{ height: '3.5rem' }} className='mv3'>
      <h3 className='mv0 pt4 pl2'>Saved Scenarios</h3>
    </div>
    <DroppableScenarioList droppableId='rightPanel' list={ savedScenarios } />
  </>
)

export default RightPanel