import { useState } from 'react';
import classes from './Tasks.module.scss';
import TaskModel from '../../interfaces/task.model';
import ActiveTask from '../../components/ActiveTask/ActiveTask';

const { taskContainer } = classes;

const Tasks = ({ }) => {

    const [activeTasks, setActiveTasks] = useState<TaskModel[]>([
        {
            id: 1,
            title: 'Clean Room',
            due: 'End of month'
        },
        {
            id: 2,
            title: 'Summerfest to see Cafune'
        }
    ]);

    return (
        <section className={taskContainer}>
            {activeTasks ?
                activeTasks.map((item) => {
                    return (
                        <ActiveTask key={item.id} taskName={item} />
                    )
                }) : <p> You have no active tasks.</p>
            }
        </section>
    );
};

export default Tasks;