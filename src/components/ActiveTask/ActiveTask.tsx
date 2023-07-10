import TaskModel from '../../interfaces/task.model';
import classes from './ActiveTask.module.scss';

const { container, CTAactions } = classes;

// TODO: Add Delete Logic.
// TODO: Add complete Logic and a counter of completed task.
// TODO: Fix error handling if create no task. Need to think about the id output.

interface TaskProps {
    taskName: TaskModel
};

const ActiveTask = ({ taskName }: TaskProps) => {
    return (
        <div className={container}>
            <p> {taskName.title} </p>
            {/* <p>{taskName.id}</p> */}
            <div className={CTAactions}>
                <button>Complete Task</button>
                <button>Delete task</button>
            </div>
        </div>
    );
};

export default ActiveTask;

// Very important to have consistent file of interface so you can
// link component prop interface to the model interface.