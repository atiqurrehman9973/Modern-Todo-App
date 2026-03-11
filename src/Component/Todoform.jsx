import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addtodo } from './Store/TodoSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const ToggleTodo = (e) => {
    e.preventDefault()
    if(input.trim() === '') return;
   dispatch(addtodo(input))
    setInput('');
    console.log("Todo Added:");
}
  return (
    <div className="p-6 border-b border-slate-100">
      <form className="flex gap-2" onSubmit={ToggleTodo}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?" 
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
        <button 
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-indigo-200 active:scale-95"
        >
          <Plus size={24} />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
