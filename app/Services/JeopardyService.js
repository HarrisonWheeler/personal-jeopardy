import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { jeopardyApi, sandboxApi } from "./AxiosService.js";
import { playersService } from "./PlayersService.js";

class JeopardyService {

  async getRandomQuestion() {
    const res = await jeopardyApi.get()
    console.log('jeopardy question res', res);
    ProxyState.questions = res.data.map(q => new Question(q))
    console.log('ProxyState questions', ProxyState.questions);
  }

  async answerQuestion(answer) {
    let activeQuesiton = ProxyState.questions[0]
    if (ProxyState.activePlayer == null) {
      window.alert("Pick a player first!")
    }
    if (answer == 'correct') {
      ProxyState.activePlayer.points += activeQuesiton.value
    } else {
      ProxyState.activePlayer.points -= activeQuesiton.value
    }
    playersService.editPlayer()
    this.getRandomQuestion()
  }
}

export const jeopardyService = new JeopardyService()