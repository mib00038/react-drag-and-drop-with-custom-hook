import React, {useEffect, useState} from 'react'
import SearchBox from './SearchBox'
import DroppableScenarioList from './DroppableScenarioList'
import isEmpty from 'lodash.isempty'
import Switch from '@material-ui/core/Switch';
import produce from 'immer'

const LeftPanel = ({ scenarios, setScenarios }) => {
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
      <div className='flex items-center'>
        <SearchBox {...{ setSearchText }} />
        <SortByDateBox {...{ scenarios, setScenarios }} />
      </div>
      <DroppableScenarioList droppableId='leftPanel' list={ filteredList } />
    </>
  )
}

const SortByDateBox = ({ scenarios, setScenarios }) => {
  const [isDescending, setIsDescending] = useState(false)
  const handleChange = () => setIsDescending(!isDescending)
  
  useEffect(() => {
    const newScenarios = produce(scenarios, draft => {
      draft.sort( (a, b) => isDescending ? a.date < b.date : a.date > b.date)
    })

    setScenarios(newScenarios)
  }, [scenarios, setScenarios, isDescending, setIsDescending])


  return (
    <div className='ml2 h-100'>
      <span>Asc</span>
      <Switch
        checked={isDescending}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <span>Dec</span>
    </div>
  )
}
export default LeftPanel
