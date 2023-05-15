interface itemProps {
    index: number;
    value: string;
    editIndex: number;
    editValue: string;
    editInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    saveEditTodo: () => void;
    cancelEdit: () => void;
    editTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const Item: React.FC<itemProps> = ({
    index,
    value,
    editIndex,
    editValue,
    editInputChange,
    saveEditTodo,
    cancelEdit,
    editTodo,
    deleteTodo
}) => {
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