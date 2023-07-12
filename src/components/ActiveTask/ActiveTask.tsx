import { useState } from 'react';
import TaskModel from '../../interfaces/task.model';
import Menu from '../Menu/Menu';
import classes from './ActiveTask.module.scss';

const { container, CTAactions, taskMenu, taskCompleted, taskContainerCompleted } = classes;

// TODO: Fix the onDelete so it can be deleted if it is completed.

interface TaskProps {
    taskName: TaskModel;
    onDelete: (id: string) => void;
    onComplete?: (id: string) => void;
    onUndo: (id: string) => void;
    id: string;              // id of the task to be deleted
    isCompleted?: boolean;
};

const ActiveTask = ({ taskName, onDelete, id, onComplete, isCompleted, onUndo }: TaskProps) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleTaskMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeTaskMenu = () => {
        setMenuOpen(false);
    };

    const toggleCompleted = () => {
        if (!isCompleted && onComplete) {  // only call onComplete if task is not completed
            onComplete(id);
        };
    };

    return (
        <>
            <div className={`${container} ${isCompleted ? taskContainerCompleted : ''}`} onMouseLeave={closeTaskMenu}>
                <figure
                    className={taskMenu}
                    onClick={toggleTaskMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </figure>
                {menuOpen ? <Menu
                    mouseClose={closeTaskMenu}
                    onDelete={onDelete}
                    onUndo={onUndo}
                    isCompleted={isCompleted}
                    id={id}
                /> : null}
                <p> {taskName.title} </p>
                {isCompleted ?
                    <div>
                        <label>Completed!</label>
                        <svg className={taskCompleted} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    :
                    <div className={CTAactions}>
                        <button onClick={toggleCompleted}>Complete Task</button>
                    </div>
                }
            </div>
        </>
    );
};

export default ActiveTask;