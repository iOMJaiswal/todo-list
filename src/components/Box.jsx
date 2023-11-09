import React, { useState } from 'react';
import Input from './Input';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import EditItem from './EditItem';

uuidv4();

const Box = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(...todos)
  }

  const toogleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    console.log(...todos)
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTask = (task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
  }
  return (
    <div className="min-h-[85%] h-min min-w-[35%] w-min bg-slate-600 rounded-lg">
      <Input addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditItem editTodo={editTask} task={todo} />
        ) :
          (

            <Item task={todo} key={index} toogleComplete={toogleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )

      ))}
    </div>
  )
}

export default Box
