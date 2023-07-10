import React, { useRef } from 'react';
import classes from './CreateTask.module.scss';

// TODO: Switch out ref for a own state. Better way to reset after each submission.

const { container, actions } = classes;

// Could be an interface and in interfaces, but just to prove you can do it with types too:
type NewToDoProps = {
    addTodo: (todoText: string) => void;
};

const CreateTask = ({ addTodo }: NewToDoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const addTaskHandler = (evnt: React.FormEvent) => {
        evnt.preventDefault();
        const enteredText = textInputRef.current!.value;
        addTodo(enteredText);
    };

    return (
        <section className={container}>
            <h3>Create a task</h3>
            <form onSubmit={addTaskHandler}>
                <label htmlFor="todo-text">Write a task and then click the 'Create Task' to add to the To-Do List.</label>
                <input placeholder='Create your task here' type="text" id="todo-text" ref={textInputRef} />
                <div className={actions}>
                    <button>Create Task</button>
                    {/* <button>Clear</button> */}
                </div>
            </form>
        </section>
    );
};

export default CreateTask;