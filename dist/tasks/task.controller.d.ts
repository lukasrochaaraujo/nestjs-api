import { Task } from "./task.model";
import { Response } from "express";
export declare class TaskController {
    tasks: Array<Task>;
    constructor();
    getAll(): Promise<Array<Task>>;
    getById(res: Response, id: number): Promise<void>;
    create(task: Task): Task;
}
