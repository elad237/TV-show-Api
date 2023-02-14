import { postApi } from './api.js';
import { loadLeaderboard } from './load-data.js';

const submitHandler = async (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (score && user) {
    await postApi(user, score);
  }
  form.reset();
  loadLeaderboard();
};
export default submitHandler;
