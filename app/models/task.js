export class Task {

    parentTaskList;

    summary;

    $doneButton;

    constructor(parentTaskList, summary) {
        this.parentTaskList = parentTaskList;
        this.summary = "Task: " + summary;
    }

    toString() {
        return `Task: ${this.summary}`;
    }

    deleteTask() {
        let parentParagraph = this.$doneButton.parentNode;
        parentParagraph.parentNode.removeChild(parentParagraph);
        this.parentTaskList.removeTask(this);
        console.log(this.parentTaskList.tasks);
    }

    toParagraph() {
        let $paragraphWithTaskSummary = document.createElement("p");
        $paragraphWithTaskSummary.classList.add("list-item");
        $paragraphWithTaskSummary.innerText = this.summary;
        return $paragraphWithTaskSummary;
    }
}