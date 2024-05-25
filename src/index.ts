const world = "world";

function hello(who: string = world): string {
  return `Hello ${who}! `;
}
const nextJoke = document.getElementById("nextJoke") as HTMLButtonElement;
const jokeText = document.getElementById("jokeText") as HTMLParagraphElement;
document.addEventListener("DOMContentLoaded", getJoke);

nextJoke.addEventListener("click", getJoke);

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
