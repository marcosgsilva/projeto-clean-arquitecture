import {Task} from "../entities/Task";


export interface ITasksRepository{
   findByEmail(title:string): Promise<Task>;
   save(task: Task): Promise<void>;
}