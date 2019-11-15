const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";
app.appendChild(logo);

const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

// we do not const axios = require('axios') here because
// it doesn't work in the browser, instead use a CDN in the script

axios.get("https://ghibliapi.herokuapp.com/films").then(res => {
  // handle success
  if (res.status >= 200 && res.status < 400) {
    res.data.forEach(movie => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      container.appendChild(card);

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;
      card.appendChild(h1);

      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
});
