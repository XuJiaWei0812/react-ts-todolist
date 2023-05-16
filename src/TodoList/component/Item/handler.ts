import { useState, useEffect } from 'react';

export const useItemHandle = (todos:string[],setTodos:React.Dispatch<React.SetStateAction<string[]>>) => {

    // 修改索引值，初始值為-1
    const [editIndex, setEditIndex] = useState<number>(-1);

    // 修改輸入框，初始值為空字串
    const [editValue, setEditValue] = useState<string>('');

    // 使用參數index，刪除指定待辦事項
    const deleteTodo = (index: number): void => {
        const newTodos: string[] = [...todos];
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
        todos,setTodos,
        editIndex, setEditIndex,
        editValue, setEditValue,
        deleteTodo,
        editTodo,
        editInputChange,
        saveEditTodo,
        cancelEdit
    }
}