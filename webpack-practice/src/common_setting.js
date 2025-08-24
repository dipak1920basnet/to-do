import { Task } from "./task";
import { generateUUID } from "./required_func";

function get_task(to_do_list, id)
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

export function change_name(to_do_list, id, name)
{
    const task = get_task(to_do_list,id);
    if (task) task.name = name;
}

export function change_date(to_do_list,id, category, new_date){
    const task = get_task(to_do_list,id);
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

export function change_priority(to_do_list,id, new_priority)
{
    const task = get_task(to_do_list,id)
    if (task) task.priority = new_priority;
}

export function toggle_status(to_do_list,id)
{
    const task = get_task(to_do_list,id)
    if (task) task.toggleCompleted()
}

// Future features: 
/* 
Re-order task by priority
re-order task by due-date
re-order incomplete task that is already due
shows number of days to complete task
*/