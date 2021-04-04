import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import Card from '@material-ui/core/Card'
import Scenario from './Scenario'

const getListStyle = isDragging => ({
  background: isDragging ? 'lightblue' : '#f2f1f0',
  padding: 8,
})

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 16,
  margin: `0 0 ${8}px 0`,
  background: isDragging ? 'lightgreen' : 'white',
  ...draggableStyle
})

const DroppableScenarioList = ({ droppableId,  list}) => (
  <Droppable {...{ droppableId }}>
    {({ innerRef, placeholder }, { isDraggingOver } ) => (
      <div
        ref={ innerRef }
        className='vh-75 ba overflow-scroll'
        style={ getListStyle(isDraggingOver) }
      >
        {list && list.map( ({ id, imageurl, name, date, creator }, index) => (
          <Draggable
            key={ id }
            draggableId={ id }
            index={ index }
          >
            {({ innerRef, draggableProps, dragHandleProps }, { isDragging } ) => (
              <Card
                raised
                square={true}
                ref={ innerRef }
                {...{ ...draggableProps, ...dragHandleProps }}
                style={ getItemStyle(isDragging, draggableProps.style) }
                className='pa2 flex justify-between'
              >
                <Scenario {...{imageurl, name, date, creator}} />
              </Card>
            )}
          </Draggable>
        ))}
        { placeholder }
      </div>
    )}
  </Droppable>
)

export default DroppableScenarioList