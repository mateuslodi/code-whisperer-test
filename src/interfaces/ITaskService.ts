import { Task } from "../models/TaskModel";

export interface ITaskService {
	getTaskList(): Array<Task>;
	getTaskById(id: string): Task | undefined;
	createTasks(task: Task[]): Task[];
	updateTask(task: Task): Task | void;
	deleteTaskById(id: string): void;
}
