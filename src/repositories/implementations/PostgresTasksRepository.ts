import {ITasksRepository} from "../ITasksRepository";
import {Task} from "../../entities/Task";

export class PostgresTasksRepository implements ITasksRepository {
    private tasks: Task[] = [];

    async findTask(title: string): Promise<Task> {
        const task = this.tasks.find(task => task.title === title);
        return task;
    }

    async save(task: Task): Promise<void> {
        this.tasks.push(task);
    }
}