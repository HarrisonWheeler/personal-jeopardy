
export class Question {
  constructor(data) {
    this.id = data.id
    this.category = data.category
    this.categoryId = data.category_id
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
  }

  get Template() {
    return /*html*/ `
    <div class="row max-height">
      <div class="col-12 d-flex flex-column h-25">
        <small>Category: ${this.category.title}</small>
        <small>Value: ${this.value}</small>
        <small>Player: <span id='active-player'></span> </small>
      </div>
      <div class="col-12 mt-5 text-center">
        <h4 class="selectable" onclick="app.jeopardyController.show()">Question: ${this.question}</h4>
      </div>
      <div class="col-12 text-center">
        <h4 class="visually-hidden position-absolute" id="answer">Answer: ${this.answer}</h4>
      </div>
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <button class="btn btn-success visually-hidden" id="correct" onclick="app.jeopardyController.answerQuestion('correct')">Correct</button>
          <button class="btn btn-danger visually-hidden" id="wrong" onclick="app.jeopardyController.answerQuestion('wrong')">WRONG</button>
        </div>
      </div>
    </div>
    `
  }
}