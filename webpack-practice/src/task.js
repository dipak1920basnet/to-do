// this task.js will be depended on greeting.js
import { Task, generateUUID } from "./greeting";
const to_do_list = [];


// Import both Task class and generateUUID function
// import { Task, generateUUID } from './task.js';

// Example usage:
// const task1 = new Task(generateUUID(), "Buy milk", new Date(), new Date(), "high");
// console.log(task1.name);

// add task to to_do_list

function get_task(id)
{
    for(let i = 0; i< to_do_list.length; i++)
    {
        let assigned_task = to_do_list[i];
        if (assigned_task.id == id)
        {
            return assigned_task;
        }
    }
    return null;
}
export function add_task(name,start_date,due_date,priority)
{
    const task1 = new Task(generateUUID(), name,start_date, due_date, priority)
    to_do_list.push(task1);
}

export function change_name(id, name)
{
    const task = get_task(id);
    if (task) task.name = name;
}

export function change_date(id, category, new_date){
    const task = get_task(id);
    category = category.toLowerCase()
    if (!task) return;

    if (category == "start")
    {
        task._start_date.change_time(new_date);
    }
    else if (category == "end")
    {
        task._due_date.change_time(new_date);
    }
    else{
        console.warn(`Invalid category: ${category}. Use "start" or "end".`);
    }
}

export function change_priority(id, new_priority)
{
    const task = get_task(id)
    if (task) task.priority = new_priority;
}

export function toggle_status(id)
{
    const task = get_task(id)
    if (task) task.toggleCompleted()
}

export { to_do_list };

// Future features: 
/* 
Re-order task by priority
re-order task by due-date
re-order incomplete task that is already due
shows number of days to complete task
*/