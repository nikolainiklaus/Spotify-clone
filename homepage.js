const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");
let playStatus;
let currentSong;

// const searchArtist = () => {
//   let artistName = document.getElementById("artist-input").value;
//   console.log(artistName);
//   fetch(url + "/" + artistName)
//     .then((response) => {
//       response.json();
//     })
//     .then((response) => getAlbum(response))
//     .catch((err) => {
//       console.log(err);
//     });
// };

const getArtist = async () => {
  try {
    document.getElementById("recently").innerHTML = "";
    document.getElementById("shows").innerHTML = "";
    document.getElementById("morning").innerHTML = "";
    let artistName = document.getElementById("artist-input").value;
    console.log(artistName);
    let res = await fetch(url + "/" + artistName);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      albumList1(data);
      albumList2(data);
      getShows();
    }
  } catch (error) {}
};

const getShows = async () => {
  try {
    let res = await fetch(url + "/" + "coldplay");
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      albumList3(data);
    }
  } catch (error) {}
};

const albumList1 = (fetchedList) => {
  let songs = fetchedList.data;
  let container = document.querySelector("#morning");
  for (let i = 0; i < 8; i++) {
    const list = songs[i];
    container.innerHTML += `
  <div class="morning-card col-sm-12 col-md-4 col-lg-3">
  <div class="card mb-3 d-flex flex-row">
    <div class="col-md-4">
      <img
        src="${list.album.cover_medium}"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div
      class="col-md-8 pl-0 d-flex justify-content-start align-items-center morning-card-title"
    >
    <a href="./album.html?id=${list.album.id}"><p class="card-text">${list.album.title}</p></a>
    </div>
  </div>
</div>
  `;
  }
};

const albumList2 = (fetchedList) => {
  let songs = fetchedList.data;
  let container = document.querySelector("#recently");
  for (let i = 0; i < 10; i++) {
    const list = songs[i];
    container.innerHTML += `
  <div class="col mb-4">
  <div class="card px-3 py-3 song-card">
    <img
      class="song-img"
      src="${list.album.cover_medium}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body px-0">
    <a href="./artist.html?id=${list.artist.id}"><h6 class="card-title">${list.artist.name}</h6></a>
    <a href="./album.html?id=${list.album.id}"><p class="card-text">
    ${list.album.title}
    </p></a>
    </div>
    <div id="card-${list.preview}" class="play-button-outer" >
       <div onclick="playControls(event)" class="play-button" id="${list.preview}"></div>
    </div>
  </div>
</div>
  `;
  }
};

const albumList3 = (data) => {
  let songs = data.data;
  let container = document.getElementById("shows");
  for (let i = 0; i < 10; i++) {
    const list = songs[i];
    container.innerHTML += `
  <div class="col mb-4">
  <div class="card px-3 py-3 song-card">
    <img
      class="song-img"
      src="${list.album.cover_medium}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body px-0">
      <a href="./artist.html?${list.artist.id}"><h6 class="card-title">${list.artist.name}</h6></a>
      <a href="./album.html?id=${list.album.id}"><p class="card-text">
      ${list.album.title}
      </p></a>
    </div>
    <div id="card-${list.preview}" class="play-button-outer" >
       <div onclick="playControls(event)" class="play-button" id="${list.preview}"></div>
    </div>
    
  </div>
</div>
  `;
  }
};

const playControls = (list) => {
  console.log(list.target.id);
  let songUrl = list.target.id;

  if (playStatus !== "playing" && currentSong !== songUrl) {
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = `<video id="vid" width="0" height="0">
   <source
     src="${songUrl}"audio/mpeg"
   />
   Your browser does not support the video tag.
  </video>`;
    let song = document.getElementById("vid");
    song.play();
    currentSong = songUrl;
    playStatus = "playing";
    let songCard = document.getElementById(`card-${songUrl}`);
    songCard.innerHTML = `<div onclick="playControls(event)" class="pause-button" id="${songUrl}"></div>`;
    songCard.classList.remove("play-button-outer");
    songCard.classList.add("play-button-outer-show");
  } else if (songUrl === currentSong && playStatus === "playing") {
    let song = document.getElementById("vid");
    song.pause();

    playStatus = "paused";
    currentSong = "";
    document.getElementById(
      `card-${songUrl}`
    ).innerHTML = `<div onclick="playControls(event)" class="play-button" id="${songUrl}"></div>`;
    document
      .getElementById(`card-${songUrl}`)
      .classList.remove("play-button-outer-show");
    document
      .getElementById(`card-${songUrl}`)
      .classList.add("play-button-outer");
  } else {
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = `<video id="vid" width="0" height="0" autoplay>
   <source
     src="${songUrl}"audio/mpeg"
   />
   Your browser does not support the video tag.
  </video>`;
    document.getElementById(
      `card-${currentSong}`
    ).innerHTML = `<div onclick="playControls(event)" class="play-button" id="${currentSong}"></div>`;
    document
      .getElementById(`card-${currentSong}`)
      .classList.remove("play-button-outer-show");
    document
      .getElementById(`card-${currentSong}`)
      .classList.add("play-button-outer");
    currentSong = songUrl;
    playStatus = "playing";
    document.getElementById(
      `card-${songUrl}`
    ).innerHTML = `<div onclick="playControls(event)" class="pause-button" id="${songUrl}"></div>`;
    document
      .getElementById(`card-${songUrl}`)
      .classList.add("play-button-outer-show");
    document
      .getElementById(`card-${songUrl}`)
      .classList.remove("play-button-outer");
  }
  console.log(playStatus);
};

// changePlayButton = (songUrl) => {
//   document.getElementById(songUrl).innerHTML = `<div onclick="playControls(event)" class="play-button" id="${list.preview}"></div>`;
// };

setUsername = () => {
  // we retrieve the username key from the localStorage. This will return a name
  let currentUser = localStorage.getItem("username");

  //then we are setting the innerText/html of the elementss to the name
  document.getElementById(
    "morning-header"
  ).innerText = `Good morning ${currentUser}`;
  document.getElementById("dropdownMenuButton1").innerText = `${currentUser}`;
};

window.onload = () => {
  getArtist();
  setUsername();
};
