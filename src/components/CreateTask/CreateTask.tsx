import classes from './CreateTask.module.scss';

const { container, actions } = classes;

const CreateTask = ({ }) => {
    return (
        <section className={container}>
            <h3>Create a task</h3>
            <form>
                <input placeholder='Create your task here' />
                <div className={actions}>
                    <button>Create Task</button>
                    <button>Clear</button>
                </div>
            </form>
        </section>
    );
};

export default CreateTask;