import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoform from './Component/Todoform'
import TodoList from './Component/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Todoform />
   <TodoList />
    </>
  )
}

export default App
