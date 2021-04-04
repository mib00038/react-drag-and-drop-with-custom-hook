import React from 'react'
import Grid from '@material-ui/core/Grid'
import SearchBox from './SearchBox'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Card from '@material-ui/core/Card'
import {getItemStyle, getListStyle, getScenarioDateString} from '../App'
import Scenario from './Scenario'

const LeftPanel = ({ scenarios }) => (
  <div>
    <SearchBox />
    <Droppable droppableId="left-panel">
      {( provided, snapshot ) => (
        <div
          ref={ provided.innerRef }
          className='vh-75 ba overflow-scroll'
          style={ getListStyle(snapshot.isDragging) }
        >
          {scenarios && scenarios.map( ({ id, imageurl, name, date, creator }, index) => (
            <Draggable
              key={ id }
              draggableId={ id }
              index={ index }
            >
              {( provided, snapshot ) => {
                const { innerRef, draggableProps, dragHandleProps } = provided

                const itemStyle = getItemStyle(snapshot.isDragging, draggableProps.style)


                return (
                  <Card
                    raised
                    square={true}
                    ref={innerRef}
                    {...{ ...draggableProps, ...dragHandleProps }}
                    style={ itemStyle }
                    className='pa2 flex justify-between'
                  >
                    <Scenario {...{imageurl, name, date, creator}} />
                  </Card>
                )
              }}
            </Draggable>
          ))}
          { provided.placeholder }
        </div>
      )}
    </Droppable>
  </div>
)


export default LeftPanel
