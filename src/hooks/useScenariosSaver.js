import produce from 'immer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { SCENARIOS_URL } from '../constants/urls'
import isEmpty from 'lodash.isempty'

const reorder = ( list, startIndex, endIndex ) => (
  produce(list, draft => {
    const [removed] = draft.splice(startIndex, 1)
    draft.splice(endIndex, 0, removed)
  })
)

const move = ( source, destination, droppableSource, droppableDestination ) => (
  produce({}, draft => {
    draft[droppableSource.droppableId] = produce(source, sourceDraft => {
      sourceDraft.splice(droppableSource.index, 1)
    })
    draft[droppableDestination.droppableId] = produce(destination, destDraft => {
      destDraft.splice(droppableDestination.index, 0, source[droppableSource.index])
    })
  })
)

const useScenarioSaver = () => {
  const [scenarios, setScenarios] = useState([])
  const [savedScenarios, setSavedScenarios] = useState([])

  useEffect(() => {
    const _savedScenarios = JSON.parse(localStorage.getItem('savedScenarios'))
    const _scenarios = JSON.parse(localStorage.getItem('scenarios'))

    if (isEmpty(_savedScenarios) && isEmpty(_scenarios)) {
      axios
        .get(SCENARIOS_URL)
        .then((resp) => {
          setScenarios(resp.data)
        })

    } else {
      setSavedScenarios(_savedScenarios)
      setScenarios(_scenarios)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('scenarios', JSON.stringify(scenarios))
  }, [scenarios])

  useEffect(() => {
    localStorage.setItem('savedScenarios', JSON.stringify(savedScenarios))
  }, [savedScenarios])

  const getList = id => id === 'leftPanel' ? scenarios: savedScenarios

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return

    const sourceList = getList(source.droppableId)

    if (source.droppableId !== destination.droppableId) {
      const sinkList =  getList(destination.droppableId)
      const { leftPanel, rightPanel } = move(sourceList, sinkList, source, destination)

      setScenarios( leftPanel )
      setSavedScenarios( rightPanel )
    } else {
      const items = reorder(sourceList, source.index, destination.index)

      source.droppableId === 'rightPanel' ? setSavedScenarios( items ) : setScenarios( items )
    }
  }

  return { onDragEnd, scenarios, savedScenarios }
}

export default useScenarioSaver