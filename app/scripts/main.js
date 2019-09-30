import { Task } from '../models/task.js';

let $registeredTasksList = document.querySelector('#registered-tasks-list');

//End point from Mockapi.io website
let mockDataEndpoint = 'http://5d8de5c5370f02001405c5e5.mockapi.io/maniana/mock-task-list';

//Auto populate the registered task list from the mock.api
fetch(mockDataEndpoint)
    .then(resp => {
        let responseInJSON = resp.json();
        return responseInJSON;
    })
    .then(body => {
        let tasksData = body[0].tasks;
        tasksData.forEach(taskSummary => {
            let task = new Task(taskSummary);
            $registeredTasksList.appendChild(task.toParagraph());
        });
    });

let getValueFromInput = function getValueFromInput(querySelector) {
    let $inputElement = document.querySelector(querySelector);
    // console.log($inputElement);
    if (!$inputElement) {
        throw new Error("Element was not found using the query selector " + querySelector)
    }
    return $inputElement.value;
}

let addNewTaskFunction = function addNewTaskFunction() {
    let $newTaskSummaryInputError = document.querySelector("#new-task-summary-error");
    let summaryInputText = getValueFromInput("#new-task-summary");
    if (summaryInputText) {
        let newTask = new Task(summaryInputText);
        $registeredTasksList.appendChild(newTask.toParagraph());
        $newTaskSummaryInputError.setAttribute("class", "");
    } else {
        $newTaskSummaryInputError.setAttribute("class", "red");
        $newTaskSummaryInputError.innerText = "Summary cannot be empty";
    }
};
let $addNewItemButton = document.querySelector('#add-button');
$addNewItemButton.addEventListener('click', addNewTaskFunction);