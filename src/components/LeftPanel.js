import React, {useEffect, useState} from 'react'
import SearchBox from './SearchBox'
import DroppableScenarioList from './DroppableScenarioList'
import isEmpty from 'lodash.isempty'

const LeftPanel = ({ scenarios }) => {
  const [searchText, setSearchText] = useState()
  const [filteredList, setFilteredList] = useState(scenarios)
  
  useEffect(() => {
    if(isEmpty(searchText)) {
      setFilteredList(scenarios)
    } else {
      setFilteredList(scenarios.filter(({name}) => name.toLowerCase().includes(searchText)))
    }
  }, [searchText, scenarios])
  
  return (
    <>
      <SearchBox {...{ setSearchText }} />
      <DroppableScenarioList droppableId='leftPanel' list={ filteredList } />
    </>
  )
}

export default LeftPanel
