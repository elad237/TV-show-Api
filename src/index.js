
import { displayShows } from './modules/display-show';
import './style.css';

window.onload = () =>{
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      const topTenShows = data
        .filter((show) => show.rating.average)
        .sort((a, b) => (a.rating.average > b.rating.average ? -1 : 1))
        .slice(0, 9);
        
      displayShows (topTenShows)
      
    });
}