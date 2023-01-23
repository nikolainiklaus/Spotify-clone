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

const getArtistArray = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412", {
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
};

window.onload = () => {
  getArtistArray();
};
