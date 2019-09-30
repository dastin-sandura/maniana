export class Task {

    constructor(summary) {
        this.summary = "Task: " + summary;
    }

    toString() {
        return `Task: ${this.summary}`;
    }

    toParagraph() {
        let $paragraphWithTaskSummary = document.createElement("p");
        $paragraphWithTaskSummary.innerText = this.summary;
        let $doneButton = document.createElement("button");
        $doneButton.innerText = "Task done!";
        $doneButton.classList.add("task-done-button");
        $doneButton.addEventListener('click', this.markTaskAsDone);
        // console.log($doneButton.parentNode.parentNode.removeChild);
        $paragraphWithTaskSummary.appendChild($doneButton);
        return $paragraphWithTaskSummary;
    }

    markTaskAsDone() {
        console.log(this);
        let parentParagraph = this.parentNode;
        parentParagraph.parentNode.removeChild(parentParagraph);
        // console.log(this.parentNode.removeChild(this));

    }
}