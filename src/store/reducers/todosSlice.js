import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },

  // kiểu dùng id bằng nanoid không có tính đoán biết được nên ko recomment sử dụng
  // reducers: {
  //   addTodo: (state, action) => {
  //     state.allTodos.unshift({
  //       id: nanoid(),
  //       title: action.payload,
  //       completed: false,
  //     });
  //   },
  // },

  // sử dụng kiểu này
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },

    todosFetched(state, action) {
      state.allTodos = action.payload;
    },
  },
});

//async action creator
export const getTodos = () => {
  const getTodoAsync = async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=15"
      );
      dispatch(todosFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return getTodoAsync;
};

//reducer
const todosReducer = todosSlice.reducer;

//selector
export const todosSelector = (state) => state.todosReducer.allTodos;

//export action

export const {
  addTodo,
  markComplete,
  deleteTodo,
  todosFetched,
} = todosSlice.actions;

//export reducer
export default todosReducer;
