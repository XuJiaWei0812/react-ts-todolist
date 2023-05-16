import { useState, useEffect } from 'react';

export const useHandle = () => {
    // 待辦事項陣列，初始值讀取localStorage，讀取不到值為空陣列
    const [todos, setTodos] = useState<string[]>(() => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });

    // 事項新增輸入框，初始值為空字串
    const [inputValue, setInputValue] = useState<string>('');

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

    return {
        todos, setTodos,
        inputValue, setInputValue,
        inputChange,
        inputKeyDown,
        addTodo,
    }
}