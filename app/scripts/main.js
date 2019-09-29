import { Task } from '../models/task.js';

let $taskList = document.querySelector('.task-list');

//End point from Mockapi.io website
let mockDataEndpoint = 'http://5d8de5c5370f02001405c5e5.mockapi.io/maniana/mock-task-list';

fetch(mockDataEndpoint)
    .then(resp => {
        let responseInJSON = resp.json();
        return responseInJSON;
    })
    .then(body => {
        let tasksData = body[0].tasks;
        tasksData.forEach(taskSummary => {
            let task = new Task(taskSummary);
            $taskList.appendChild(task.toParagraph());
        });
    });

let $addNewItemButton = document.querySelector('#add-button');

let addNewTaskFunction = function () {
    let taskSummary;
    //todo replace logic using one input to logic which uses the HTML for element
    let $newTaskForm = document.querySelector("#new-task-form");
    let $summaryInput = document.querySelector("#task-input");
    let summaryInputText = $summaryInput.value;
    if (summaryInputText) {
        $newTaskForm.setAttribute("class", "");
        taskSummary = summaryInputText;
        let $taskItem = document.createElement("p");
        $taskItem.innerText = taskSummary;
        $taskList.appendChild($taskItem);
    } else {
        $newTaskForm.setAttribute("class", "red");
        //todo show error message visible to user in the span next to the input

    }
};

$addNewItemButton.addEventListener('click', addNewTaskFunction);