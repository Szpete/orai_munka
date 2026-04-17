import { PlayArea } from "./PlayArea.js";

class CardArea extends PlayArea {
    /**
     * @param {SelectManager} manager 
     * @param {QuestionViewType} questionView 
     */
    constructor(manager, questionView) {
        super(manager);


        const btnTrue = document.createElement("button");
        btnTrue.textContent = questionView.question;
        btnTrue.className = "card-true";
        btnTrue.addEventListener("click", () => this.manager.nextQuestion(true));

        const btnFalse = document.createElement("button");
        btnFalse.textContent = questionView.question;
        btnFalse.className = "card-false";
        btnFalse.addEventListener("click", () => this.manager.nextQuestion(false));

        this.div.appendChild(btnTrue);
        this.div.appendChild(btnFalse);
    }
}

export { CardArea };