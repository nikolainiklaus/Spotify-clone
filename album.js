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
  document.getElementById(
    "artist"
  ).innerHTML = ` <a href="./artist.html?id=${artist.id}"<p>${artist.name}</p></a>`;
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

setUsername = () => {
  // we retrieve the username key from the localStorage. This will return a name
  let currentUser = localStorage.getItem("username");

  //then we are setting the innerText/html of the elementss to the name
  document.getElementById("dropdownMenuButton1").innerText = `${currentUser}`;
};

const playBtn = () => {
  let buttonContainers = document.getElementsByClassName("play-button-outer");
  for (let buttonContainer of buttonContainers) {
    buttonContainer.addEventListener("click", toggleBtn);
  }
};

const toggleBtn = () => {
  let playBtnNode = document.querySelector(".play-button");
  let pauseBtnNode = document.querySelector(".pause-button");
  playBtnNode.classList.toggle("d-none");
  pauseBtnNode.classList.toggle("d-none");
};

window.onload = () => {
  getAlbum();
  setUsername();
};
