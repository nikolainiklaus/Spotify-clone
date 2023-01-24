// ed sheeran
// 384236
// queen
// 412

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
    songTableList.innerHTML += `  <th scope="row">
    ${index}
</th>
<th class="image-area p-0">
    <img class=""
        src="${song.album.cover_medium}"
        alt="">
</th>
<th>
    ${song.title}
</th>
<th>
${song.rank}
</th>
<th>
    ${song.duration}
</th>`;
    index++;
  });
};

window.onload = () => {
  const URLparams = new URLSearchParams(window.location.search);
  const id = URLparams.get("id");
  getArtist(384236);
  getSongsList(384236);
};
