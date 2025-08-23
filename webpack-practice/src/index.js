// this index.js will be depended on greeting.js
import { Task, generateUUID } from "./greeting";
const to_do = [];


// Import both Task class and generateUUID function
import { Task, generateUUID } from './task.js';

// Example usage:
const task1 = new Task(generateUUID(), "Buy milk", new Date(), new Date(), "high");
console.log(task1.name);
