import React, { useEffect } from 'react'
import Form from '../form/form.component'
import Todo from '../list/list.component'

// api
import fetchTodos from '../../api'

// context
import { useTodoContext } from '../../context/todoContext'

const TodoList = () => {

  const { todoStates: { todos, setTodos } } = useTodoContext()

  useEffect(() => {
    const fetchedTodo = async () => {
      setTodos(await fetchTodos())
    }

    fetchedTodo()
  }, [setTodos])


  // ADD todo
  const addTodo = todo => {
    // remove unecessary spaces
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(() => newTodos)
  }

  // UPDATE todo
  const updateTodo = (id, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return
    }

    setTodos(prevTodo => prevTodo.map(item => (item.id === id ? newValue : item)))
  }

  // REMOVE todo
  const removeTodo = id => {
    const removeArray = [...todos].filter(todo => todo.id !== id)

    // check if it's in the state(array) and if it's there, it will return the new array with removed items
    setTodos(removeArray)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        //toggle todo
        todo.isComplete = !todo.isComplete
      }

      return todo
    })
    setTodos(() => updatedTodos)
  }

  return (
    <div className="flex justify-center flex-col mx-auto">
      <h1 className="mx-auto text-3xl mt-5 py-4 font-bold">MY TO-DOs</h1>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList

