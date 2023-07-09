import classes from './Tasks.module.scss';
import ActiveTask from '../../components/ActiveTask/ActiveTask';
import TaskModel from '../../interfaces/task.model';

const { taskContainer } = classes;

interface TaskProps {
    items: TaskModel[];  // items is an array of TaskModel
};

const Tasks = ({items}: TaskProps) => {

    return (
        <section className={taskContainer}>
            {items ?
                items.map((item) => {
                    return (
                        <ActiveTask key={item.id} taskName={item} />
                    )
                }) : <p> You have no active tasks.</p>
            }
        </section>
    );
};

export default Tasks;