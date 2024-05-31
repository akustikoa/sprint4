const nextJoke = document.getElementById("nextJoke") as HTMLButtonElement;
const jokeText = document.getElementById("jokeText") as HTMLParagraphElement;
const boto1 = document.getElementById("boto1") as HTMLButtonElement;
const boto2 = document.getElementById("boto2") as HTMLButtonElement;
const boto3 = document.getElementById("boto3") as HTMLButtonElement;
const iconHtml = document.getElementById("iconhtml") as HTMLDivElement;
const temperature2 = document.getElementById("temperature2") as HTMLDivElement;
const backgroundImage = document.getElementById(
  "backgroundImg"
) as HTMLDivElement;

const form = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
];

const reportJokes: typeJokes[] = [];

type typeJokes = {
  joke: string;
  score: number;
  date: string;
};

//Crida funcions al carregar pàgina
document.addEventListener("DOMContentLoaded", () => {
  aleatoriJoke();
  changeBackground();
});

// Funció per mostrar acudits
async function getJoke(): Promise<void> {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    if (jokeText) {
      jokeText.innerHTML = data.joke;
    }
  } catch (error) {
    console.error("Error getting the joke:", error);
  }
}

// Funció per mostrar acudits Chuck Norris
async function getNorrisJoke(): Promise<void> {
  try {
    const response = await fetch(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      {
        headers: {
          "x-rapidapi-key":
            "f4403c7ad0msh04c93825d4e43ecp138fe3jsndca77ab58afc",
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();
    if (jokeText) {
      jokeText.innerHTML = data.value;
    }
  } catch (error) {
    console.error("Error getting norrisJoke", error);
  }
}

//Function getWeather
async function getWeather(): Promise<void> {
  const apiKey = "3dd738c2fa4e8c524c12451eebab3cfb";
  const city = "Barcelona";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconHtml.innerHTML = `<img src="${iconUrl}">`;

  const tempCode = data.main.temp;
  temperature2.innerHTML = tempCode;
}
getWeather();

//Assignem valor a botons
boto1?.addEventListener("click", () => vote(1)); //Cridem la funcio vote amb l'argumen (valor 1,2 0 3)
boto2?.addEventListener("click", () => vote(2));
boto3?.addEventListener("click", () => vote(3));

//Funció valorar acudits
function vote(score: number) {
  let jokeScore = score;

  if (jokeText) {
    const jokeHtml = jokeText.innerHTML;

    const jokeAcudits: typeJokes = {
      joke: jokeHtml,
      score: jokeScore,
      date: new Date().toISOString(),
    };
    reportJokes.push(jokeAcudits);

    console.log(reportJokes);
  }
}

//Funció canvi de forma aleatoriament
function changeBackground() {
  const randomIndex = Math.floor(Math.random() * form.length);
  const selectedForm = form[randomIndex];
  backgroundImage.style.backgroundImage = `url('img/${selectedForm}')`;
}

function aleatoriJoke() {
  const aleatori = Math.random() < 0.5 ? getJoke : getNorrisJoke;
  aleatori();
}

nextJoke.addEventListener("click", () => {
  changeBackground();
  aleatoriJoke();
});
