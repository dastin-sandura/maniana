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
            addNewTaskWithGivenName(taskSummary);
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

let addNewTaskWithGivenName = function addNewTaskWithGivenName(taskName) {
    let task = new Task(taskName);
    $registeredTasksList.appendChild(task.toParagraph());
    correctTheMostImportantTask(taskName);
}

let addNewTaskFunction = function addNewTaskFunction() {
    let $newTaskSummaryInputError = document.querySelector("#new-task-summary-error");
    let summaryInputText = getValueFromInput("#new-task-summary");
    if (summaryInputText) {
        addNewTaskWithGivenName(summaryInputText);
        $newTaskSummaryInputError.setAttribute("class", "");
        correctTheMostImportantTask(summaryInputText);
    } else {
        $newTaskSummaryInputError.setAttribute("class", "red");
        $newTaskSummaryInputError.innerText = "Summary cannot be empty";
    }
};

function correctTheMostImportantTask(summaryInputText) {
    let $mostImportantTask = document.querySelector("#most-important-task p")

    if (!$mostImportantTask) {
        let $mostImportantTaskList = document.querySelector("#most-important-task")
        let $newMostImportantTask = new Task(summaryInputText).toParagraph();
        $mostImportantTaskList.appendChild($newMostImportantTask);
    }
}
let $addNewItemButton = document.querySelector('#add-button');
$addNewItemButton.addEventListener('click', addNewTaskFunction);