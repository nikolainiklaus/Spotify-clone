// ed sheeran
// 384236
// queen
// 412
//bruno
//429675
//sza
//5531258

window.onload = () => {
  const URLparams = new URLSearchParams(window.location.search);
  const id = URLparams.get("id");
  getArtist(id);
  getSongsList(id);
};

const getArtist = (id) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayArtist(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const displayArtist = (data) => {
  console.log("This arist is " + data.name);
  let artistName = document.getElementById("artist-name");
  artistName.innerText = data.name;
  let artistNode = document.querySelector(".artist-name");
  artistNode.innerText = data.name;
  let artistImage = document.getElementById("artist-img");
  artistImage.src = data.picture_medium;
  let artistProfileIMG = document.getElementById("artist-profile");
  artistProfileIMG.src = data.picture_small;
  let artistBGImg = document.querySelector(".jumbotron-fluid");
  artistBGImg.style.backgroundImage = `url(${data.picture_xl})`;

  let fanNode = document.getElementById("fanbase");
  fanNode.innerText = data.nb_fan + " monthly listeners";
};

const getSongsList = (id) => {
  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(
      (dataSongs) => displaySongPopular(dataSongs)

      // displaySongPopular(dataSongs)
    )
    .catch((err) => {
      console.log(err);
    });
};

const displaySongPopular = (response) => {
  let songs = response.data;
  console.log("Here", songs);
  let songTableList = document.getElementById("artisit-popu-songs");
  let index = 1;
  songs.forEach((song) => {
    // <span class="iconify-inline" data-icon="oi:audio-spectrum" style="color: #1db954;" data-flip="horizontal,vertical"></span>
    songTableList.innerHTML += ` <td scope="row">${index}
    
    </td>
    <td class="image-area p-0">
    <a href="./album.html?id=${song.album.id}"><img class="" src="${
      song.album.cover_medium
    }" ></a>
    </td>
    <td>${song.title}</td>
    <td class="text-muted">${song.rank}</td>
    <td class="text-muted">${changeToMins(song.duration)}</td>`;
    index++;
  });
};

const changeToMins = (mins) => {
  return Math.floor(mins / 60) + ":" + (mins % 60);
};
