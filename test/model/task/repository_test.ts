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

})