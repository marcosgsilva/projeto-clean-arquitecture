import {ICreateTaskRequestDTO} from "../useCases/createTask/createTaskDTO";
import {uuid} from "uuidv4";

export class Task{
    public readonly id: string;

    public title: string;
    public email: string;
    public password: string;

    constructor(props: ICreateTaskRequestDTO, id?: string) {
        Object.assign(this,props);

        if(!id){
            this.id = uuid();
        }
    }
}