import React from 'react'

import TodoList from './components/pages/todolist.component'
class App extends React.Component {
  render() {
    return (
      <div className="max-width h-screen bg-gray-100">
        <TodoList />
      </div>
    )
  }
}

export default App
