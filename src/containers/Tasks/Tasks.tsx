import classes from './Tasks.module.scss';
import ActiveTask from '../../components/ActiveTask/ActiveTask';
import TaskModel from '../../interfaces/task.model';

const { taskContainer, defaultStatus } = classes;

interface TaskProps {
    items: TaskModel[];  // items is an array of TaskModel, that will have the properties, since array of objects.
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
};

const Tasks = ({ items, onDelete, onComplete }: TaskProps) => {

    return (
        <section className={taskContainer}>
            {items.length > 0 ?
                <h4> Active Tasks: {items.length}</h4> : null
            }
            {items.length > 0 ?
                items.map((item) => {
                    return (
                        <ActiveTask
                            key={item.id}
                            taskName={item}
                            onDelete={onDelete}
                            onComplete={onComplete}
                            id={item.id}
                        />
                    )
                }) : <p className={defaultStatus}> You have no active tasks.</p>
            }
        </section>
    );
};

export default Tasks;