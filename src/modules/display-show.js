export const displayShows = (shows) => {
  console.log(shows);
  const tvShows = document.getElementById("tv-shows");
  let ax = ``;
  shows.forEach((show) => {
    ax += ` <div class="card">
<img src=${show.image.medium} alt="">
<p>${show.name}</p>
<button>comment</button>
</div>`;
  });
  tvShows.innerHTML = ax;
};
