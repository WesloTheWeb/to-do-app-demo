import TaskModel from '../../interfaces/task.model';
import classes from './ActiveTask.module.scss';

const { container, CTAactions } = classes;

// TODO: Add complete Logic and a counter of completed task.
// TODO: Fix error handling if create no task. Need to think about the id output.

interface TaskProps {
    taskName: TaskModel;
    onDelete: (id: string) => void;  // add onDelete prop
};

const ActiveTask = ({ taskName, onDelete }: TaskProps) => {
    return (
        <div className={container}>
            <p> {taskName.title} </p>
            <div className={CTAactions}>
                <button>Complete Task</button>
                <button onClick={() => onDelete(taskName.id)}>Delete task</button>
            </div>
        </div>
    );
};

export default ActiveTask;

/* Notes
- Very important to have consistent file of interface so you can
- link component prop interface to the model interface.

- The arrow function () => {} is necessary to ensure the onDelete function is not called immediately when the component renders, 
but only when the button is clicked.

-In TypeScript, void is a type that denotes the absence of having any type at all. When used as a function return type, 
void indicates that a function does not return a value.

- If a function was supposed to return a string, for example, the interface would look like this: onDelete: (id: string) => string;. 
But in the case of an event handler function like onDelete, we're not interested in any return value. We simply want to perform an action 
(deleting a task) when the function is called. Thus, we use void as the return type.







*/