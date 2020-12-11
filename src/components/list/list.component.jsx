import React from 'react'

import Form from '../form/form.component'
import CustomButton from '../button/button.component'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

// context
import { useEditContext } from '../../context/todoContext'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

  const { editStates: { edit, setEdit } } = useEditContext()

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />
  }

  if (!todos) {
    return <div></div>
  }

  return todos.length > 0 ? todos.map((todo, i) => (
    // this would be cleaner if the classes are grouped in an @apply Directive, but since it's not that bad, i'll just leave it like this.
    <div key={i} className={`${todo.isComplete ? 'line-through' : ''} flex items-center justify-between md:mx-32 lg:mx-60 px-5 mx-5 my-1 rounded bg-gray-200`}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className="w-1/2 md:w-4/5 group py-2 cursor-pointer">
        <span className="pr-2">{i + 1}. </span>
        {todo.title}
        <span className={`${todo.isComplete ? '' : 'group-hover:opacity-50 opacity-0'} transition delay-300 duration-150 ease-in pl-2`}>
          <FontAwesomeIcon className={`${todo.isComplete ? 'text-green-800' : ''}`} icon={faCheckCircle} />
          <i className={`${todo.isComplete ? 'hidden' : ''}`}> mark as done?</i>
        </span>
      </div>
      <div className="py-2">
        <CustomButton className="rounded-full h-10 w-10 mr-2 bg-gray-300 hover:text-red-400 transition duration-300 ease-in-out" onClick={() => removeTodo(todo.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </CustomButton>
        <CustomButton className="rounded-full h-10 w-10 bg-gray-300 hover:text-blue-500 transition duration-300 ease-in-out" onClick={() => setEdit({ id: todo.id, value: todo.title })}>
          <FontAwesomeIcon icon={faEdit} />
        </CustomButton>
      </div>
    </div>
  )) : <div className="flex justify-center opacity-50"> Your list is EMPTY</div>
}

export default Todo
