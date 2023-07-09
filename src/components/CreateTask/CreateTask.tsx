import React, { useRef} from 'react';
import classes from './CreateTask.module.scss';

const { container, actions } = classes;

const CreateTask = ({ }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const addTaskHandler = (evnt: React.FormEvent) => {
        evnt.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
    }

    return (
        <section className={container}>
            <h3>Create a task</h3>
            <form onSubmit={addTaskHandler}>
                <label htmlFor="todo-text">Write a task and then click the 'Create Task' to add to the To-Do List.</label>
                <br />
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