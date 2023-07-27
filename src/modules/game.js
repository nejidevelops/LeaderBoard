const leaderBoardAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export class Game {
  createGame = async () => {
    try {
      const response = await fetch(`${leaderBoardAPI}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'football' }),
      });

      const data = await response.json();

      if (data && data.id) {
        return data.id;
      } else {
        throw new Error('Invalid response data format');
      }
    } catch (err) {
      return err;
    }
  };

  getScores = async (gameId) => {
    try {
      const response = await fetch(`${leaderBoardAPI}/games/${gameId}/scores/`);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  newScore = async (gameId, score) => {
    try {
      const response = await fetch(`${leaderBoardAPI}/games/${gameId}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }
}


fetch(`${leaderBoardAPI}`)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

fetch(`${leaderBoardAPI}`)
try {

} catch {

}