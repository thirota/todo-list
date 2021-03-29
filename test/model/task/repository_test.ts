import { ITask } from "src/model/task/task";
import { describe, Suite, it } from "mocha";
import { Repository } from "src/model/task/repository";
import * as assert from "assert"

describe("Task repository", () => {

    it("Must include 2 records when initialized", () => {
        const repo = new Repository();
        const tasks = repo.ListTasks();
        assert.equal(tasks.length, 2);
    })

    it("Be able to add 1 record", () => {
        const repo = new Repository();
        const newTask: ITask = {
            id: 0,
            text: "new task",
        };
        const newId = repo.AddTask(newTask);
        console.log(newId);

        const tasks = repo.ListTasks();
        assert.equal(tasks.length, 3);
        assert.notEqual(tasks.find((task: ITask): boolean => {
            return task.text === "new task";
        }), undefined);
        assert.notEqual(tasks.find((task: ITask): boolean => {
            return task.id === 3;
        }), undefined);
    })

})