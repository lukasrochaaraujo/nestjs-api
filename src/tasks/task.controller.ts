import {Body, Controller, Get, HttpStatus, Param, Post, Res} from "@nestjs/common";
import {Task} from "./task.model";
import {Response} from "express";

@Controller('tasks')
export class TaskController {
    tasks: Array<Task>;

    constructor() {
        this.tasks = [
            { id: 1, description: 'Test' }
        ];
    }

    @Get()
    async getAll(): Promise<Array<Task>> {
        return this.tasks;
    }

    @Get(':id')
    async getById(@Res() res: Response, @Param('id') id: number) {
        const task = this.tasks.find((t: Task) => t.id == id);

        if (task) res.status(HttpStatus.OK).json(task);

        res.status(HttpStatus.NOT_FOUND).send();
    }

    @Post()
    create(@Body() task: Task) {
        this.tasks.push(task);
        return task;
    }
}