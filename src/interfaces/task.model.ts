interface TaskModel {
    id: string;
    title: string;
    due: Date | undefined;
    completed?: boolean;
}

export default TaskModel;