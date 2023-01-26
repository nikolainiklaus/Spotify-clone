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
      loginFunction();
      return;
    } else {
      console.log("Usename or Password Incorrect");
    }
  }
}

const user = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
// const output = document.getElementById("dropdownMenuButton1");

const loginFunction = () => {
  const key = user.value;
  const value = password.value;
  console.log(key);
  console.log(value);
  console.log("success");
  if (key && value) {
    localStorage.setItem("username", `${key}`);
    console.log(localStorage.getItem("username"));
    window.location.href = "index.html";
  }
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     output.innerHTML += `${key}:${value}`;
  //   }
  //   window.location.href = "index.html";
  // go to page index
};
