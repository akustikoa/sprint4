// const world = "world";

// function hello(who: string = world): string {
//   return `Hello ${who}! `;
// }

const nextJoke = document.getElementById("nextJoke") as HTMLButtonElement; //importem boto
const jokeText = document.getElementById("jokeText") as HTMLParagraphElement; //importem text acudit
const boto1 = document.getElementById("boto1") as HTMLCanvasElement;
const boto2 = document.getElementById("boto2") as HTMLCanvasElement;
const boto3 = document.getElementById("boto3") as HTMLCanvasElement;
document.addEventListener("DOMContentLoaded", getJoke);

// variables

type reportAcudits = {
  joke: string;
  score: number;
  date: string;
};

// MOSTRAR ACUDITS

nextJoke.addEventListener("click", getJoke); //inicialitzem la funció al clicar

async function getJoke(): Promise<void> {
  //inicialitzem funció asincrona
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

//Assignem valor a botons
boto1?.addEventListener("click", () => vote(1));
boto2?.addEventListener("click", () => vote(2));
boto3?.addEventListener("click", () => vote(3));

function vote(score: number) {
  let jokeText = document.getElementById("jokeText");
  // let boto = document.getElementById("boto" + score); //concatenem el nom més la puntuació
  let jokeScore = score;

  if (jokeText) {
    const jokeHtml = jokeText.innerHTML;

    const jokeReport: reportAcudits = {
      joke: jokeHtml,
      score: jokeScore,
      date: new Date().toISOString(),
    };
    console.log(jokeReport);
  }
}

// function getJoke() {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((data) => data.json())
//     .then((obj) => (jokeText.innerHTML = obj.joke));
// }

// async function getJoke(): Promise<void> {
//   const jokeData = await fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const jokeObj = await jokeData.json();
//   jokeText.innerHTML = jokeObj.joke;
// }
