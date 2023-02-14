import { fetchApi } from './api.js';

export const loadLeaderboard = async () => {
  const data = await fetchApi();
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    leaderboard.innerHTML += `<p>${data[i].user} : ${data[i].score}</p>`;
  }
};

export const refreshHandler = (e) => {
  e.preventDefault();
  loadLeaderboard();
};
