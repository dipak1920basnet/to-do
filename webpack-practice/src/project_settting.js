import {get_id, Project} from "./project.js";
import {change_name, change_date, toggle_status} from "./common_setting.js"

export function add_project(Project_list, name,start_date,due_date,description)
{
    const project_name = new Project(get_id(),name,start_date,due_date,description);
    Project_list.push(project_name);
}

// change the name of the project
export function change_project_name(Project_list, id, name)
{
    change_name(Project_list, id, name);
}

// change the start date/end date for the project

export function change_Project_date(Project_list,id, category, new_date)
{
    change_date(Project_list,id, category, new_date);
}

// toggle completed<-> incomplete (toggle status)

export function change_status(Project_list, id)
{
    toggle_status(Project_list,id);
}
