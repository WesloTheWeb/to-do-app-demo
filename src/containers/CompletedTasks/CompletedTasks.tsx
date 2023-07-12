import classes from './CompletedTasks.module.scss';
import ActiveTask from '../../components/ActiveTask/ActiveTask';
import TaskModel from '../../interfaces/task.model';

const { taskContainer, defaultStatus } = classes;

interface TaskProps {
    items: TaskModel[];  // items is an array of TaskModel
    onDelete: (id: string) => void;
    onUndo: (id: string) => void;
};

const CompletedTasks = ({ items, onDelete, onUndo }: TaskProps) => {

    return (
        <section className={taskContainer}>
            {items.length > 0 ?
                <h4> Completed Tasks: {items.length}</h4> : null
            }
            {items.length === 0 ?
                <p className={defaultStatus}> You have no completed tasks.</p> :
                items.map((item) => {
                    return (
                        <ActiveTask
                            key={item.id}
                            taskName={item}
                            onDelete={onDelete}
                            onUndo={onUndo}
                            id={item.id}
                            isCompleted={item.completed} // pass completed status
                        />
                    )
                })
            }
        </section>
    );
};

export default CompletedTasks;