import { useState, useEffect } from 'react';

export const useHandle = () => {
    // 待辦事項陣列，初始值讀取localStorage，讀取不到值為空陣列
    const [todos, setTodos] = useState<string[]>(() => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });

    // 事項新增輸入框，初始值為空字串
    const [inputValue, setInputValue] = useState<string>('');

    // 修改索引值，初始值為-1
    const [editIndex, setEditIndex] = useState<number>(-1);

    // 修改輸入框，初始值為空字串
    const [editValue, setEditValue] = useState<string>('');

    //如果todos變動，就更新localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // 輸入框的值有變動，就更新輸入框的變數值
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // 如果在輸入框focus的時候按Enter就會直接新增，不用點按鈕
    const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    // 新增待辦事項，並將輸入框清空
    const addTodo = () => {
        if(todos.length == 5){
            alert('超過5筆待辦事項囉!，先做完在說吧!');
            setInputValue('');
        }else{
            if (inputValue !== "") {
                setTodos([...todos, inputValue]);
                setInputValue('');
            } else {
                alert("請勿新增空白事項!")
            }
        }
    };


    // 使用參數index，刪除指定待辦事項
    const deleteTodo = (index: number): void => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // 使用參數index，開啟指定事項的編輯
    const editTodo = (index: number) => {
        setEditIndex(index);
        setEditValue(todos[index]);
    };

    // 編輯框的值有變動，就更新編輯框的變數值
    const editInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.target.value)
    };

    // 儲存編輯過後的待辦內容
    const saveEditTodo = (): void => {
        const newTodos = [...todos];
        newTodos[editIndex] = editValue;
        setTodos(newTodos);
        setEditIndex(-1);
        setEditValue('');
    };

    //取消指定事項的編輯 
    const cancelEdit = (): void => {
        setEditIndex(-1);
        setEditValue('');
    };

    return {
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
    }
}