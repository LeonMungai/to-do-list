import React from 'react';

const todoList = [
    { id: 1, text: 'Learn to code' },
    { id: 2, text: 'Finish project' },
    { id: 3, text: 'Go to the gym' }
];

const todoItemClasses = "flex items-center justify-between p-4";
const deleteButtonClasses = "text-red-500 dark:text-red-400";

const TodoList = () => {
    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <ul className="bg-white dark:bg-zinc-800 rounded-lg shadow divide-y divide-zinc-200 dark:divide-zinc-700">
                {todoList.map((todo) => (
                    <TodoItem key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

const TodoItem = ({ text }) => {
    return (
        <li className={todoItemClasses}>
            <span className="text-lg">{text}</span>
            <button className={deleteButtonClasses}>Delete</button>
        </li>
    );
};

export default TodoList;
