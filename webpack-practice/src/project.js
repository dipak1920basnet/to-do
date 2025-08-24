import {Set_date, Completed} from "./common_class.js";
import { Task } from "./task.js";
import { generateUUID } from "./required_func.js";

export class Project
{
    constructor(id,name,start_date,due_date,description)
    {
        this._id = id;
        this._name = name;
        this._start_date = Set_date("start",start_date);
        this._due_date = Set_date("end",due_date);
        this._tasks = [];
        this._description = description;
        this._completed = Completed(false);
    }

    add_task(name,start_date,due_date,priority)
    {
        const task1 = new Task(generateUUID(), name,start_date, due_date, priority)
        this._tasks.push(task1);
    }

    get_task(id) {
        // Check if the tasks array exists and is not empty
        if (!this._tasks || this._tasks.length === 0) {
            return null;
        }

        // Iterate through each task in the _tasks array
        for (let i = 0; i < this._tasks.length; i++) {
            const task = this._tasks[i];

            // Check if the current task's id matches the provided id
            if (task.id === id) {
                return task; // Return the matching task
            }
        }

        // If no task with the given id is found, return null
        return null;    
    }

}