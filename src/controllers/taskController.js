import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
    const { completed } = req.query; // 1. Extract the query param
    const tasks = await taskService.getAllTasks(completed); // 2. Pass it to the service
    res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
