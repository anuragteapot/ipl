import Match from '../assets/data/json/Match.json'
import BallB from '../assets/data/json/Ball_By_Ball.json'
import PlayerMatch from '../assets/data/json/Player_Match.json'
import Player from '../assets/data/json/Player.json'
import Season from '../assets/data/json/Season.json'
import Team from '../assets/data/json/Team.json'

/**
* Api class for communication with the server
*/
class Api {

  /**
  * constructor
  */
  constructor() {

  }

  /**
  * Get the teams of a directory from the server
  * @returns {json object}
  */
  getTeams() {

    Season
    Player
    BallB
    Match
    PlayerMatch
    return Team;
  }
}

export let api = new Api();
