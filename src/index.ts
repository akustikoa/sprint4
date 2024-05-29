const nextJoke = document.getElementById("nextJoke") as HTMLButtonElement; //importem boto
const jokeText = document.getElementById("jokeText") as HTMLParagraphElement; //importem text acudit

const boto1 = document.getElementById("boto1") as HTMLCanvasElement;
const boto2 = document.getElementById("boto2") as HTMLCanvasElement;
const boto3 = document.getElementById("boto3") as HTMLCanvasElement;
const iconHtml = document.getElementById("iconhtml") as HTMLDivElement;
const temperature2 = document.getElementById("temperature2") as HTMLDivElement;
document.addEventListener("DOMContentLoaded", () => {
  aleatoriJoke();
});

// variables
const reportJokes: typeJokes[] = [];

type typeJokes = {
  joke: string;
  score: number;
  date: string;
};

// Funció aleatoris

// MOSTRAR ACUDITS

async function getJoke(): Promise<void> {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      }, // amb el get fem un fetch per aconseguir la data i ara l'hem de fer llegible
    });

    const data = await response.json(); // amb el .json transformem la data llegible i ho recollima a la var. data
    console.log(data);
    if (jokeText) {
      jokeText.innerHTML = data.joke;
    }
  } catch (error) {
    console.error("Error getting the joke:", error);
  }
}

// Function norris joke
// nextJoke.addEventListener("click", getNorrisJoke);

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
    console.log(data);
    if (jokeText) {
      jokeText.innerHTML = data.value;
    }
  } catch (error) {
    console.error("Error getting the norrisJoke", error);
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

function vote(score: number) {
  // let jokeText = document.getElementById("jokeText");
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

function aleatoriJoke() {
  const funcioAleatoriJoke = Math.random() < 0.5 ? getJoke : getNorrisJoke;
  funcioAleatoriJoke();
}
nextJoke.addEventListener("click", () => {
  aleatoriJoke(); // Assegura't que `aleatoriJoke` es cridi correctament al fer clic
});
