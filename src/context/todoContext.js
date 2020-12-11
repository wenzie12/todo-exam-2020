import React, { useContext, useState, createContext } from 'react'

// todos Hooks
const TodosContext = createContext()

// custom hooks
export const useTodoContext = () => useContext(TodosContext)

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  return (
    <TodosContext.Provider value={{ todoStates: { todos, setTodos } }}>
      {children}
    </TodosContext.Provider>
  )
}

// edit Hooks
const EditContext = createContext()

// custom hooks
export const useEditContext = () => useContext(EditContext)

export const EditProvider = ({ children }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return (
    <EditContext.Provider value={{ editStates: { edit, setEdit } }}>
      {children}
    </EditContext.Provider>
  )
}

