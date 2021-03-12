import React, {useState} from 'react'
import {addTodo} from '../store/reducers/todosSlice'
import {useDispatch} from 'react-redux' 

const TodoForm = () => {
  const [title, settitle] = useState('')

  const changeTitle = event => {
    settitle(event.target.value)
  }

  const dispatch = useDispatch()

  const addSingleTodo = event => {
    event.preventDefault();
    dispatch(addTodo(title))
    settitle('')
  }

  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type="submit" value='add'/>
      </form>
    </div>
  )
}

export default TodoForm

