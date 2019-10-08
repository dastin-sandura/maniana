import { TaskList } from '../models/taskList.js';

//End point from Mockapi.io website
let mockDataEndpoint = 'http://5d8de5c5370f02001405c5e5.mockapi.io/maniana/mock-task-list';

fetch(mockDataEndpoint)
    .then(resp => {
        let responseInJSON = resp.json();
        return responseInJSON;
    })
    .then(body => {
        let tasksData = body[0].tasks;
        let taskList = new TaskList(tasksData);
        let $addNewItemButton = document.querySelector('#add-button');
        $addNewItemButton.addEventListener('click', taskList.addNewTaskBasedOnDataFromInput.bind(taskList));
    });
