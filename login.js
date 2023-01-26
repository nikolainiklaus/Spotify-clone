const users = [
  {
    username: "Nikolai",
    password: "enter",
  },
  {
    username: "Jovellyn",
    password: "enter",
  },
  {
    username: "Lydia",
    password: "enter",
  },
];

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      // if username & password are correct, we call the login Function
      loginFunction();
      return;
    } else {
      // if username & password are *not* correct, we call print an error message
      console.log("Usename or Password Incorrect");
    }
  }
}

const user = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const loginFunction = () => {
  const currentUsername = user.value;
  const password = password.value;
  if (currentUsername && password) {
    //"username": Lydia
    //"username": Nikolai
    //they have to be strings in order for localHost to work
    localStorage.setItem("username", `${currentUsername}`);
    window.location.href = "index.html";
  }
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     output.innerHTML += `${key}:${value}`;
  //   }
  //   window.location.href = "index.html";
  // go to page index
};
