import { createSlice , nanoid } from "@reduxjs/toolkit";
const loadTodos = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (error) {
    return [];
  }
};
// const initialTodoState = {
//   todos: [
//     { id:nanoid(), text:"hello world" , completed:false }
//   ],
// };
const initialTodoState = {
  todos: loadTodos()
};
const TodoSlice = createSlice({
    name:"todo",
    initialState:initialTodoState,
    reducers:{
        addtodo:(state,actions) => {
             state.todos.push({
                id:nanoid(),
                text:actions.payload,
                completed:false
             })
               localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        deletetodo:(state,actions) => {
            state.todos= state.todos.filter(todo => todo.id !== actions.payload)
             localStorage.setItem("todos", JSON.stringify(state.todos));
        },
     updatetodo: (state, action) => {
  const { id, newText } = action.payload;
  // State mein woh specific todo dhoondein
  const todo= state.todos.find((t) => t.id === id);
  if (todo) {
    todo.text = newText; // State update hogi toh hi input mein nazar aayega
  }
    localStorage.setItem("todos", JSON.stringify(state.todos));
},
        togglecomplete:(state, action) => {
            
state.todos = state.todos.map( todo => {
    if(todo.id === action.payload){
        return {...todo , completed:!todo.completed}
    }
    return todo;
     
} )
   localStorage.setItem("todos", JSON.stringify(state.todos));
        }
       
    }
   
})


export const { addtodo , deletetodo, updatetodo ,togglecomplete } = TodoSlice.actions;
export default TodoSlice.reducer;