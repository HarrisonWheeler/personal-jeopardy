import { ProxyState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

function drawPlayers() {
  let template = ''
  ProxyState.players.forEach(p => template += p.Template)
  document.getElementById('players').innerHTML = template
}

function drawActivePlayer() {
  document.getElementById('active-player').innerHTML = ProxyState.activePlayer.name
  document.getElementById('player-details-slot').innerHTML = ProxyState.activePlayer.PlayerDetailTemplate
}

export class PlayersController {
  constructor() {
    ProxyState.on('players', drawPlayers)
    ProxyState.on('activePlayer', drawActivePlayer)
    playersService.getAllPlayers()
  }

  setActivePlayer(id) {
    playersService.setActivePlayer(id)
  }

  async createPlayer() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const newPlayer = {
        name: form.name.value
      }
      await playersService.createPlayer(newPlayer)
    } catch (error) {
      console.log(error.message)
    }
  }

}