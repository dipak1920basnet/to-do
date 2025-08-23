// Get unique id
export function generateUUID() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    }

// A class dedicated to time handling
class Time {
    constructor(initialTime = new Date()) {
        this._time = initialTime;
    }

    // ensure we never set past times
    set(value) {
        const now = new Date();

        if (value < now) {
            this._time = now;
        } else {
            this._time = value;
        }
    }

    get() {
        return this._time;
    }
}

// The main class that *uses* Time
class Set_date {
    constructor(decide, time = new Date()) {
        this._decide = decide;
        this._time = new Time(time); // composition
    }

    get decide() {
        return this._decide;
    }

    get time() {
        return this._time.get();
    }

    set time(value) {
        if (this._decide === "start" || this._decide === "end") {
            this._time.set(value);
        }
    }

    change_time(value) {
        this._time.set(value);
    }
}


class Completed{
    constructor(completed)
    {
        this._completed = completed;
    }

    get completed()
    {
        return this._completed;
    }

    set completed(value)
    {   
        if(value == false || value == true)
        {
            this._completed = value;
        }
        else
        {
            this._completed = false;
        }
    }

    toggle()
    {
        this._completed = !this._completed;
    }
}

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