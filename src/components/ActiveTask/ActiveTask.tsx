import { useState } from 'react';
import TaskModel from '../../interfaces/task.model';
import Menu from '../Menu/Menu';
import classes from './ActiveTask.module.scss';

const { container, CTAactions, taskMenu } = classes;

// TODO: Add complete Logic and a counter of completed task.

interface TaskProps {
    taskName: TaskModel;
    onDelete: (id: string) => void;  // add onDelete prop
    id: string;              // id of the task to be deleted
};

const ActiveTask = ({ taskName, onDelete, id }: TaskProps) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleTaskMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeTaskMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className={container} onMouseLeave={closeTaskMenu}>
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
                    id={id}
                /> : null}
                <p> {taskName.title} </p>
                <div className={CTAactions}>
                    <button>Complete Task</button>
                </div>
            </div>
        </>
    );
};

export default ActiveTask;