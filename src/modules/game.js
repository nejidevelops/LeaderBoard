export default class Game {
  constructor() {
    this.leaderBoardAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  async startGame(gameName) {
    const responseStartGame = await fetch(this.leaderBoardAPI, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: gameName,
      }),
    });
    const responseStartGameData = await responseStartGame.json();
    return responseStartGameData;
  }

  async getLeaderBoard(gameId) {
    const responseGetLeaderBoard = await fetch(`${this.leaderBoardAPI}${gameId}/scores/`);
    const responseGetLeaderBoardData = await responseGetLeaderBoard.json();
    return responseGetLeaderBoardData;
  }

  async addScore(gameId, score, name) {
    if (name === '' || score === '') {
      alert('Please enter a correct value');
    }

    const responseAddScore = await fetch(`${this.leaderBoardAPI}${gameId}/scores/`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        score,
        name,
      }),
    });
    const responseAddScoreData = await responseAddScore.json();
    return responseAddScoreData;
  }
}