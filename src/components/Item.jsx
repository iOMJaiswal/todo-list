import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Item = ({ task, toogleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="-z-10">
      <div className="relative w-full max-w-lg">
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 ">
            <div className="flex-1 flex justify-between items-center">
              <div className={`h-min w-fit bg-gray-300 rounded cursor-pointer ${task.completed ? "line-through" : ""} `} onClick={() => toogleComplete(task.id)}> {task.task}</div>
              <div className="flex">
                <div className="cursor-pointer" title='Edit' onClick={() => editTodo(task.id)}>
                  <FontAwesomeIcon icon={faPenToSquare} size="2xl"/>
                </div>
                <div className="cursor-pointer  ml-3" title='Delete' onClick={() => deleteTodo(task.id)}>
                  <FontAwesomeIcon icon={faSquareMinus} size="2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
