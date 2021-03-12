import React from 'react'
import {useSelector} from 'react-redux'
import {todosSelector} from '../store/reducers/todosSlice'

const Navbar = () => {
  const todos = useSelector(todosSelector)
  return (
    <div className='navbar'>
      <h1>My redux app todos</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total: {todos.length}</li>
      </ul>
    </div>
  )
}

export default Navbar
