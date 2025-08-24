import {Set_date, Completed} from "./common_class.js"
export class Task
{
    constructor(id, name, start_date, due_date, priority)
    {
        this._id = id;
        this._name = name;
        this._start_date = new Set_date("start",start_date);
        this._due_date = new Set_date("end",due_date);
        this._priority = priority;
        this.task_completed = new Completed(false);
    }

    get id()
    {
        return this._id;
    }
    // Proper getter for name
    get name() {
        return this._name;
    }

    // Setter with validation
    set name(value) {
        if (typeof value === "string" && value.trim().length > 0) {
            this._name = value.trim();
        } else {
            this._name = "Untitled Task";
        }
    }

    get priority()
    {
        return this._priority;
    }

    set priority(value)
    {
        value = value.toLowerCase();
        if (value == "high" || value == "medium" || value == "low")
        {
            this._priority = value;
        }
        else
        {
            this._priority = "medium";
        }
           
    }

    get due_date()
    {
        return this._due_date;
    }

    set due_date(time)
    {
        const start_times = this._start_date.time
        if (time <= start_times)
        {
            this._due_date.time = start_times;
        }
        else
        {
            this._due_date.time = time;
        }
    }

    toggleCompleted()
    {
        this.task_completed.toggle();
    }

    isOverdue() {
        return !this.task_completed.completed && this._due_date.time < new Date();
    }


    toJSON() {
        return {
            id: this.id,
            name: this.name,
            start_date: this._start_date.time,
            due_date: this._due_date.time,
            priority: this._priority,
            completed: this.task_completed.completed
        };
    }

    static fromJSON(obj) {
        const task = new Task
        (
            obj.id,
            obj.name,
            new Date(obj.start_date),
            new Date(obj.due_date),
            obj.priority
        );
        task.task_completed = new Completed(obj.completed);
        return task;
    }
}