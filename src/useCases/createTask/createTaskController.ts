import {CreateTaskUseCase} from "./createTaskUseCase";
import {Response, Request} from "express";

export class CreateTaskController{
    constructor(private createTaskUseCase: CreateTaskUseCase) {
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {title, body, dt_start, dt_end} = request.body;

        try{
            await this.createTaskUseCase.execute({
                title,
                body,
                dt_start,
                dt_end
            })
            return response.status(201).send();
        }catch (err){
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }


    }
}