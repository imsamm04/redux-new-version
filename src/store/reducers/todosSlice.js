import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "job 1",
        completed: true,
      },
      {
        id: 2,
        title: "job 2",
        completed: false,
      },
      {
        id: 3,
        title: "job 3",
        completed: false,
      },
      {
        id: 4,
        title: "job 4",
        completed: false,
      },
    ],
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
  },
});

//reducer
const todosReducer = todosSlice.reducer;

//selector
export const todosSelector = (state) => state.todosReducer.allTodos;

//export action

export const { addTodo, markComplete, deleteTodo } = todosSlice.actions;

//export reducer
export default todosReducer;
