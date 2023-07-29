export default class Game {
  constructor() {
    this.leaderBoardAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  async startGame(gameName) {
    const response = await fetch(this.leaderBoardAPI, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: gameName,
      }),
    });
    const responseReturn = await response.json();
    return responseReturn;
  }

  async getLeaderBoard(gameId) {
    const responseScore = await fetch(`${this.leaderBoardAPI}${gameId}/scores/`);
    const responseReturn = await responseScore.json();
    return responseReturn;
  }

  async addScore(gameId, score, name) {
    if (name === '' || score === '') {
      alert('Please enter a correct value');
    }

    const responseScore = await fetch(`${this.leaderBoardAPI}${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });
    const responseReturn = await responseScore.json();
    return responseReturn;
  }
}