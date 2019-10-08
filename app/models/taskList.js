import { Task } from './task.js';

export class TaskList {

    $registeredTasksList = document.querySelector('#registered-tasks-list');

    importantTask;

    tasks = [];

    addTask

    removeTask(task) {
        this.tasks.forEach((ele, index) => {
            console.log("removing task " + ele.summary);
            if (ele === task) {
                this.tasks.splice(index, 1);
                ele.deleteTask();
                console.log("Found it!");
            } else {
                console.log("element " + ele + " is different from " + task);
            }
        });
    }

    constructor(tasksArray) {
        console.log("Inside of a construture");
        if (!Array.isArray(tasksArray)) {
            throw new Error("Array is expected when creating a task list!");
        }
        console.log("Before removing: " + tasksArray);

        tasksArray.forEach(taskSummary => {
            const newTask = new Task(this, taskSummary);
            this.tasks.push(newTask);
            this.addNewTaskWithGivenName(newTask.summary);

            // this.removeTask(newTask);
        });

        console.log("After removing " + this.tasks);
    }

    getValueFromInput(querySelector) {
        let $inputElement = document.querySelector(querySelector);
        if (!$inputElement) {
            throw new Error("Element was not found using the query selector " + querySelector);
        }
        return $inputElement.value;
    }

    addNewTaskBasedOnDataFromInput() {
        let $newTaskSummaryInputError = document.querySelector("#new-task-summary-error");
        let querySelector = "#new-task-summary";
        let summaryInputText = this.getValueFromInput(querySelector);

        if (summaryInputText) {
            this.addNewTaskWithGivenName(summaryInputText);
            $newTaskSummaryInputError.setAttribute("class", "");
        } else {
            $newTaskSummaryInputError.setAttribute("class", "red");
            $newTaskSummaryInputError.textContent = "Summary cannot be empty";
        }
    }

    addNewTaskWithGivenName(taskName) {
        let task = new Task(this, taskName);
        let $task = task.toParagraph();
        this.$registeredTasksList.appendChild($task);
        //TODO add methods to taskList which will move items up and down on the list

        //TODO cleanup the creation of event handling methods
        let $upPriorityButton = document.createElement("button");
        $upPriorityButton.innerText = "^";
        $upPriorityButton.addEventListener("click", this.moveTaskHigherOnTheList.bind($task));
        //todo think if this method needs binding
        $task.appendChild($upPriorityButton);
        $task.classList.add("Dastin-class");
        let $lowerPriorityButton = document.createElement("button");
        $lowerPriorityButton.innerText = "v";
        // $upPriorityButton.insertAdjacentElement('afterend',$lowerPriorityButton);
        $task.appendChild($lowerPriorityButton);
        this.$doneButton = document.createElement("button");
        this.$doneButton.innerText = "Task done!";
        this.$doneButton.classList.add("task-done-button");
        // this.$doneButton.addEventListener('click', this.deleteTask.bind(this));
        $task.appendChild(this.$doneButton);


        // this.correctTheMostImportantTask(taskName);
    }
    moveTaskHigherOnTheList(arg0, moveTaskHigherOnTheList) {
        console.log(arg0);
        console.log(moveTaskHigherOnTheList);
        if(this.previousSibling.classList.contains("list-item")){
            console.log(this.previousSibling);
            let itemAbove = this.previousSibling;
            itemAbove.insertAdjacentElement("beforebegin", this);
        }

    }

    correctTheMostImportantTask(summaryInputText) {
        //todo change this so that important task is marked by the user
        let $mostImportantTask = document.querySelector("#most-important-task p");
        if (!$mostImportantTask) {
            let $mostImportantTaskList = document.querySelector("#most-important-task");
            let newMostImportantTask = new Task(this, summaryInputText);
            let $newMostImportantTask = newMostImportantTask.toParagraph();
            $mostImportantTaskList.appendChild($newMostImportantTask);
            //make sure that the data is correct
            this.importantTask = newMostImportantTask;
        }
    }

    toString() {
        return "I am a task list with following elements: " + this.tasks;
    }
}