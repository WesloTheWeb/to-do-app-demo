import TaskModel from '../../interfaces/task.model';
import classes from './ActiveTask.module.scss';

const { container } = classes;

interface TaskProps {
    taskName: TaskModel
};

const ActiveTask = ({ taskName }: TaskProps) => {
    return (
        <div className={container}>
            <p> {taskName.title} </p>
            <p>{taskName.id}</p>
        </div>
    );
};

export default ActiveTask;

// Very important to have consistent file of interface so you can
// link component prop interface to the model interface.