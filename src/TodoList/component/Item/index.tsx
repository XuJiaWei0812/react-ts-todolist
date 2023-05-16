import { useItemHandle } from './handler';

interface ItemProps {
    index: number;
    value: string;
    todos: string[];
    setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const Item: React.FC<ItemProps> = ({
    index,
    value,
    todos, 
    setTodos
}) => {
    const {
        editIndex, setEditIndex,
        editValue, setEditValue,
        deleteTodo,
        editTodo,
        editInputChange,
        saveEditTodo,
        cancelEdit
    } = useItemHandle(todos,setTodos);

    return (
        <li className="todo-item" key={index}>
            {/* 編輯的index如果等於待辦事項的index就顯示編輯 */}
            {editIndex === index ?
                <>
                    <input className="todo-edit-input" type="text" value={editValue} onChange={editInputChange} />
                    <button className='todo-save-btn' onClick={saveEditTodo}>儲存</button>
                    <button className='todo-cancel-btn' onClick={cancelEdit}>取消</button>
                </>
                :
                <>
                    <span>{value}</span>
                    <button className='todo-edit-btn' onClick={() => editTodo(index)}>編輯</button>
                    <button className='todo-delete-btn' onClick={() => deleteTodo(index)}>刪除</button>
                </>
            }
        </li>
    );
};

export default Item;