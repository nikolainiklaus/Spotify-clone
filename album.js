const url = "https://striveschool-api.herokuapp.com/api/deezer/album";

const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id); //this can either an id or null

const getAlbum = async () => {
  try {
    let res = await fetch(url + "/" + id);
    if (res.ok) {
      let data = await res.json();
      //   console.log(typeof data);
      console.log(data);
      renderAlbum(data);
    }
  } catch (error) {}
};

const renderAlbum = (data) => {
  const { id, title, cover_medium, genres, artist, tracks } = data;

  document.getElementById("album-title").innerText = title;
  document.getElementById("artist").innerText = artist.name;
  document.getElementById("cover").innerHTML = `<img
  class="hero-img"
  src="${cover_medium}"
  alt="Card image cap"
/>`;

  let songs = tracks.data;
  console.log(songs.length);
  let i = 1;
  songs.forEach((song) => {
    console.log(song);
    const { title, duration, artist } = song;
    let minutes = ~~(duration / 60);
    let extraSeconds = duration % 60;
    document.getElementById("song-list-body").innerHTML += `  <tr>
    <th scope="row">${i}</th>
    <td>
      <p class="song-title">${title}</p>
      <p class="band-name">${artist.name}</p>
    </td>
    <td></td>
    <td>${minutes}:${extraSeconds}</td>
    </tr>`;
    i++;
  });
};

window.onload = getAlbum();
