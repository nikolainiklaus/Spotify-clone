const url = "https://striveschool-api.herokuapp.com/api/deezer/album";
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
      albumList1(data);
    }
  } catch (error) {}
};



const albumList1 = (fetchedList) => {
  let container = document.getElementById("morning")
  for (let i = 0; i < fetchedList.length; i++) {
      const list = fetchedList[i]
  container.innerHTML += `
  <div class="morning-card col-sm-12 col-md-4 col-lg-3">
  <div class="card mb-3 d-flex flex-row">
    <div class="col-md-4">
      <img
        src="${list.cover_medium}"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div
      class="col-md-8 pl-0 d-flex justify-content-start align-items-center morning-card-title"
    >
      <p class="card-text">${list.title}</p>
    </div>
  </div>
</div>
  `
}
}
const albumList2 = (fetchedList) => {
  let container = document.getElementById("recently")
  for (let i = 0; i < fetchedList.length; i++) {
      const list = fetchedList[i]
  container.innerHTML += `
  <div class="col mb-4">
  <div class="card px-3 py-3 song-card">
    <img
      class="song-img"
      src="${list.cover_medium}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body px-0">
      <h6 class="card-title">${list.artist.name}</h6>
      <p class="card-text">
      ${list.title}
      </p>
    </div>
    <div class="play-button-outer">
      <div class="play-button"></div>
    </div>
  </div>
</div>
  `
}
}
const albumList3 = (fetchedList) => {
  let container = document.getElementById("shows")
  for (let i = 0; i < fetchedList.length; i++) {
      const list = fetchedList[i]
  container.innerHTML += `
  <div class="col mb-4">
  <div class="card px-3 py-3 song-card">
    <img
      class="song-img"
      src="${list.cover_medium}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body px-0">
      <h6 class="card-title">${list.artist.name}</h6>
      <p class="card-text">
      ${list.title}
      </p>
    </div>
    <div class="play-button-outer">
      <div class="play-button"></div>
    </div>
  </div>
</div>
  `
}
}




window.onload = getAlbum();
