function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

const savedUser = getCookie("username");
if (savedUser) {
  alert(`Welcome back, ${savedUser}!`);
}

const games = [
  { name: "GTA V", price: "KSh 3,500", img: "Images/GTAV.png" },
  { name: "FIFA 24", price: "KSh 4,000", img: "Images/FC24.jpg" },
  { name: "Call of Duty", price: "KSh 4,500", img: "Images/COD.png" },
  { name: "Red Dead Redemption 2", price: "KSh 3,800", img: "Images/RDR2.jpg" }
];

const container = document.getElementById("games");

function displayGames(list) {
  container.innerHTML = "";
  list.forEach(game => {
    container.innerHTML += `
      <div class="card">
        <img src="${game.img}">
        <h3>${game.name}</h3>
        <p>${game.price}</p>
        <button>Buy Game</button>
      </div>
    `;
  });
}
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (password.length < 6) {
      message.style.color = "red";
      message.textContent = "Password must be at least 6 characters";
      return;
    }

    // Create cookie (valid for 7 days)
    document.cookie = `username=${name}; max-age=${60*60*24*7}; path=/`;

    message.style.color = "green";
    message.textContent = `Welcome, ${name}! Registration successful.`;

    form.reset();
  });
}


function filterGames() {
  const value = document.getElementById("search").value.toLowerCase();
  displayGames(games.filter(g => g.name.toLowerCase().includes(value)));
}

displayGames(games);
