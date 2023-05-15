import './index.scss';
import { useHandle } from './handler';
import Item from './component/Item'

const TodoList = () => {

    const {
        todos, setTodos,
        inputValue, setInputValue,
        editIndex, setEditIndex,
        editValue, setEditValue,
        inputChange,
        inputKeyDown,
        addTodo,
        deleteTodo,
        editTodo,
        editInputChange,
        saveEditTodo,
        cancelEdit
    } = useHandle()



    return (
        <div className='container'>
            <div className='todo-title'>
                <h1>待辦事項清單</h1>
                <div className='todo-input-section'>
                    <input className="todo-add-input" type="text" value={inputValue} onChange={inputChange} onKeyDown={inputKeyDown} />
                    <button type="submit" className='todo-add-btn' onClick={addTodo}>新增</button>
                </div>
            </div>
            <ul className='todo-content'>
                {todos.map((value, index) => (
                    <Item
                        key={index}
                        index={index}
                        value={value}
                        editIndex={editIndex}
                        editValue={editValue}
                        editInputChange={editInputChange}
                        saveEditTodo={saveEditTodo}
                        cancelEdit={cancelEdit}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;