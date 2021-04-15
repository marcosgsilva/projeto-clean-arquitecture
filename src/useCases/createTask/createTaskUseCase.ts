import {ITasksRepository} from "../../repositories/ITasksRepository";
import {ICreateTaskRequestDTO} from "./createTaskDTO";
import {Task} from "../../entities/Task";

export class CreateTaskUseCase{
    constructor(
        private tasksRepository: ITasksRepository
    ) {
    }

    async execute(data: ICreateTaskRequestDTO){
        const taskAlreadyExists= await this.tasksRepository.findByEmail(data.title);

        if(taskAlreadyExists){
            throw new Error('task already exist!')
        }

        const  task = new Task(data);
        await this


    }


}