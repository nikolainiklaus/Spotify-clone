const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");

const getAlbum = async () => {
  try {
    let res = await fetch(url + "/" + id);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      albumList1(data);
      albumList2(data);
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
    <a href="./artist.html?id=${list.id}"><p class="card-text">${list.title}</p></a>
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
      <p class="card-text">
      ${list.title}
      </p>
    </div>
    <div class="play-button-outer">
      <div class="play-button"></div>
    </div>
  </div>
</div>
  `;
  }
};

const albumList3 = (fetchedList) => {
  let songs = fetchedList.data;
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
      <p class="card-text">
      ${list.title}
      </p>
    </div>
    <div class="play-button-outer">
      <div class="play-button"></div>
    </div>
  </div>
</div>
  `;
  }
};

window.onload = getAlbum();
