import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Input = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)
    setValue("")
  }

  return (
    <form className="flex justify-around" onSubmit={handleSubmit}>

      <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="Whats task?" className="mt-2 w-[80%] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-white-700 dark:text-black dark:focus:border-blue-300" />

      <button type="submit" className="flex justify-center items-center border border-black bg-[#824bf6] w-14 mt-2 rounded-lg cursor-pointer" title="Add Task">
      <FontAwesomeIcon icon={faPlus}/>
      </button>

    </form>
  )
}

export default Input
