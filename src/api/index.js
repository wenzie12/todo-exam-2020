import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'

const fetchTodos = async () => {
  try {
    const data = await axios.get(url)
      .then(res => {
        // fetch only 5 items from API (for demo purpose only)
        const items = res.data.slice(0, 4)
        return items
      }).then()

    // fetch only what's needed.
    return data.map(todoList => ({
      id: todoList.id,
      title: todoList.title
    }))
  } catch (err) {
    console.log(err)
  }
}

export default fetchTodos