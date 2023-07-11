import React, { useState } from 'react';
import classes from './CreateTask.module.scss';

const { container, actions } = classes;

// Could be an interface and in interfaces, but just to prove you can do it with types too:
type NewToDoProps = {
    addTodo: (todoText: string) => void;
};

const CreateTask = ({ addTodo }: NewToDoProps) => {
    const [textInput, setTextInput] = useState<string>('');

    const addTaskHandler = (evnt: React.FormEvent) => {
        evnt.preventDefault();
        addTodo(textInput);
        setTextInput(''); // Resets the text input after adding the task
        console.log('function fired from within component!');
    };

    const handleInputChange = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        const words = evnt.target.value.split(' ');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const capitalizedInput = capitalizedWords.join(' ');
        setTextInput(capitalizedInput);
        // setTextInput(evnt?.target.value);
    };

    return (
        <section className={container}>
            <h3>Create a task</h3>
            <form onSubmit={addTaskHandler}>
                <label htmlFor="todo-text">Write a task and then click the 'Create Task' to add to the To-Do List.</label>
                <input
                    placeholder='Create your task here'
                    type="text"
                    id="todo-text"
                    value={textInput}
                    onChange={handleInputChange} />
                <div className={actions}>
                    <button>Create Task</button>
                </div>
            </form>
        </section>
    );
};

export default CreateTask;