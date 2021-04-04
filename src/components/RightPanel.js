import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {getItemStyle, getListStyle} from '../App'
import Scenario from './Scenario'
import {Card} from '@material-ui/core'

const RightPanel = ({ savedScenarios }) => {
  return (
    <div>
      <div style={{height: '3.5rem'}} className='mv3'>
        <h3 className='mv0 pt4 pl2'>Saved Scenarios</h3>
      </div>
      <div className='vh-75 ba'>
        <Droppable droppableId="right-panel">
          {(provided, snapshot) => {
            const {innerRef, placeholder} = provided

            return (
              <div
                ref={innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {savedScenarios && savedScenarios.map( ({ id, imageurl, name, date, creator }, index) => {
                  return (
                    <Draggable
                      key={ id }
                      draggableId={ id }
                      index = { index }
                    >
                      {(provided, snapshot) => {
                        const { innerRef, draggableProps, dragHandleProps} = provided
                        const itemStyle = getItemStyle(
                          snapshot.isDragging,
                          draggableProps.style
                        )

                        return (
                          <Card
                            raised
                            square={true}
                            ref={innerRef}
                            {...{ ...draggableProps, ...dragHandleProps }}
                            style={itemStyle}
                            className='pa2 flex justify-between'
                          >
                            <Scenario {...{ imageurl, name, date, creator }} />
                          </Card>
                        )
                      }}
                    </Draggable>
                  )
                })}
                { placeholder }
              </div>
            )
          }}
        </Droppable>
      </div>
    </div>
  )
}

export default RightPanel