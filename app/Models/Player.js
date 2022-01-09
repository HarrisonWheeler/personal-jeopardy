export class Player {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.points = data.points
    this.correct = data.correct
    this.incorrect = data.incorrect
    this.questions = data.questions
  }

  get Template() {
    return /*html*/ `<div class="col-12 selectable" data-bs-target="#player-offcanvas" data-bs-toggle="offcanvas" onclick="app.playersController.setActivePlayer('${this.id}')">
    <h6>${this.name}</h6> - <span>Score: ${this.points}</span></div>`
  }

  get PlayerDetailTemplate() {
    return /*html*/ `
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel" id="offcanvas-title">${this.name}'s Details!</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-12">
          <h3>${this.name}</h3>
          <h6>Questions Answered: ${this.questions}</h6>
          <h6>Correct: ${this.correct}</h6>
          <h6>Incorrect: ${this.incorrect}</h6>
        </div>
      </div>
    </div>
    `
  }
}