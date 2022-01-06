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
    return /*html*/ `<div class="col-12 selectable" onclick="app.playersController.setActivePlayer('${this.id}')">${this.name} Score: ${this.points}</div>`
  }
}