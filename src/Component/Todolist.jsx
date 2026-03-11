import React from 'react';
import { Trash2, CheckCircle, Circle, Save, Pencil } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { deletetodo, togglecomplete, updatetodo } from './Store/TodoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  
  
  // Is state mein hum us Todo ki ID rakhenge jo edit ho rahi hai
  const [editingId, setEditingId] = React.useState(null);

  const handleUpdateToggle = (id) => {
    if (editingId === id) {
      // Agar wahi ID dubara click ho rahi hai, matlab Save karna hai
      setEditingId(null); 
    } else {
      // Nayi ID click hui matlab Edit mode on
      setEditingId(id);
    }
  };

  return (
    <div className="px-6 py-4 space-y-3">
      {todos.map((todo) => (
        <div 
          key={todo.id}
          className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-sm transition-all group"
        >
          <div className="flex items-center gap-3 w-[25%]">
            <button className="focus:outline-none" onClick={() => dispatch(togglecomplete(todo.id))}>
              {todo.completed ? (
                <CheckCircle className="text-emerald-500" size={22} />
              ) : (
                <Circle className="text-slate-300 hover:text-indigo-400" size={22} />
              )}
            </button>

            <input 
              type="text" 
              className={` px-2 py-1 text-md ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'} outline-none  bg-transparent  ${editingId === todo.id ? "border-[1px] border-gray-400 rounded-xl transition-all duration-300 ease-in-out ": " border-[1px] border-transparent transition-all duration-300 ease-in-out"} ${todo.completed ? "border-[1px] border-transparent":""} w-full `} 
              value={todo.text} 
              // Ab ye sirf tab enable hoga jab editingId is todo ki ID ke barabar ho
              disabled={editingId !== todo.id}
              onChange={(e) => dispatch(updatetodo({ 
                id: todo.id, 
                newText: e.target.value 
              }))} 
              autoFocus={editingId === todo.id}
            />
          </div>

          <div className="flex items-center gap-2">
            <button disabled={todo.completed}
              className={`text-slate-400 hover:text-indigo-600 transition-colors opacity-0 group-hover:opacity-100 p-1 ${todo.completed ? "text-slate-300 hover:text-slate-300" : ""}`}              onClick={() => handleUpdateToggle(todo.id)}
            >
              {editingId === todo.id ? <Save size={18} className={`text-indigo-600 ${todo.completed ? "hidden":""}`} /> : <Pencil size={18} className={`${todo.completed ? "hidden":""}`} />}
            </button>
            
            <button 
              className="text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1"
              onClick={() => dispatch(deletetodo(todo.id))}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      <div className="pt-4 flex justify-between items-center border-t border-slate-50">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {todos.length} Tasks Remaining
        </p>
      </div>
    </div>
  );
};

export default TodoList;