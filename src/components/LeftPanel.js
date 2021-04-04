import React from 'react'
import SearchBox from './SearchBox'
import DroppableScenarioList from './DroppableScenarioList'

const LeftPanel = ({ scenarios }) => (
  <>
    <SearchBox />
    <DroppableScenarioList droppableId='leftPanel' list={ scenarios } />
  </>
)

export default LeftPanel
