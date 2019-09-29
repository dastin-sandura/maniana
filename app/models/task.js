export class Task {
    constructor(summary) {
        this.summary = "Task: " + summary;
    }

    toString() {
        return `Task: ${this.summary}`;
    }

    toParagraph() {
        var $paragraphWithTaskSummary = document.createElement("p");
        $paragraphWithTaskSummary.innerText = this.summary;
        return $paragraphWithTaskSummary;
    }
}