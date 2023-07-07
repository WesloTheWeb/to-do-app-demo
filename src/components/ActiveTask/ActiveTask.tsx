import classes from './ActiveTask.module.scss';

const { container } = classes;

interface TaskProps {
    taskName: {
        id: number,
        title: string;
    };
};

const ActiveTask = ({ taskName }: TaskProps) => {
    return (
        <div className={container}>
            <p> {taskName.title} </p>
        </div>
    );
};

export default ActiveTask;