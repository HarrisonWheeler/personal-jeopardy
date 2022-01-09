import { ProxyState } from "../AppState.js";
import { jeopardyService } from "../Services/JeopardyService.js";

function drawQuestion() {
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template
}

// function drawCategories() {
//   document.getElementById('categories').innerHTML = `<li><a class="dropdown-item" href="#">Sports</a></li>`
// }

export class JeopardyController {
  constructor() {
    ProxyState.on('questions', drawQuestion)
    jeopardyService.getRandomQuestion()
  }

  async answerQuestion(answer) {
    try {
      await jeopardyService.answerQuestion(answer)
    } catch (error) {
      console.log(error.message)
    }
  }

  show() {
    document.getElementById('answer').classList.remove('visually-hidden')
    document.getElementById('correct').classList.remove('visually-hidden')
    document.getElementById('wrong').classList.remove('visually-hidden')
  }
}