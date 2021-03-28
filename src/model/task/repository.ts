import { ITask } from "./task"

export class Repository {
    private tasks: ITask[];

    constructor() {
        this.tasks = [
          {
              id: 1,
              text: "task1",
              done: false,
          },
          {
              id: 2,
              text: "task2",
              done: false,
          }  
        ];
    }

    /**
     * Add a task.
     * @param task task
     * @returns added task id
     */
    public AddTask(task: ITask): number {
        if (task.done === undefined) {
            task.done = false
        }
        task.id = this.tasks[this.tasks.length - 1].id + 1
        this.tasks.push(task);
        return task.id
    }

    /**
     * Get task list.
     * @returns task list
     */
    public ListTasks(): ITask[] {
        return this.tasks.filter((task)=> !task.done);
    }

}