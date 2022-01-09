import { ProxyState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { sandboxApi } from "./AxiosService.js"

class PlayersService {
  async getAllPlayers() {
    const res = await sandboxApi.get('players')
    console.log('get all players res', res.data);
    ProxyState.players = res.data.map(p => new Player(p))
    console.log('ProxyState players', ProxyState.players);

  }

  setActivePlayer(id) {
    let foundPlayer = ProxyState.players.find(p => p.id == id)
    ProxyState.activePlayer = new Player(foundPlayer)
  }

  async createPlayer(newPlayer) {
    const res = await sandboxApi.post('players', newPlayer)
    console.log('create player res', res.data)
    ProxyState.players = [...ProxyState.players, new Player(res.data)]
  }

  async editPlayer() {
    const res = await sandboxApi.put(`players/${ProxyState.activePlayer.id}`, ProxyState.activePlayer)
    let foundPlayerIndex = ProxyState.players.findIndex(p => p.id == ProxyState.activePlayer.id)
    ProxyState.players.splice(foundPlayerIndex, 1, new Player(res.data))
    ProxyState.players = ProxyState.players
  }
}

export const playersService = new PlayersService()