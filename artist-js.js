// const getArtist = (artistId) => {
//   fetch(
//     `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`,
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => response.json())
//     .then((artist) => {
//       console.log(artist);
//       displayArtist(artist);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// ed sheeran
// 384236

const getArtist = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/1562681", {
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

const getSongsList = () => {
  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=arianagrande`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(
      (dataSongs) => console.log(dataSongs.data)
      //   displaySongPopular(dataSongs)
    )
    .catch((err) => {
      console.log(err);
    });
};

// const displaySongPopular = (dataSongs) => {};

window.onload = () => {
  getArtist();
  getSongsList();
};
