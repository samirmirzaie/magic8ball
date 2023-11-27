// Program Title

let outputAnswer = document.getElementById("output");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  let question = document.getElementById("search-in").value.toLowerCase();

  if (question === "is javascript awesome") {
    outputAnswer.innerHTML = `Yes, obviously.`;
  } else if (question === "does a magic 8 ball actually work") {
    outputAnswer.innerHTML = `How dare you doubt me.`;
  } else if (question === "") {
    outputAnswer.innerHTML = `Please enter in a question.`;
  } else if (randNum < 0.02) {
    outputAnswer.innerHTML = `
    Concentrate and ask again.
    `;
  } else if (randNum < 0.05) {
    outputAnswer.innerHTML = `Without a doubt.
    `;
  } else if (randNum < 0.1) {
    outputAnswer.innerHTML = `As I see it, yes.
    `;
  } else if (randNum < 0.15) {
    outputAnswer.innerHTML = `Outlook not so good.
    `;
  } else if (randNum < 0.2) {
    outputAnswer.innerHTML = `Don't count on it.
    `;
  } else if (randNum < 0.25) {
    outputAnswer.innerHTML = `I have mixed feelings.`;
  } else if (randNum < 0.4) {
    outputAnswer.innerHTML = `Biggest no.
    `;
  } else if (randNum < 0.5) {
    outputAnswer.innerHTML = `Are you seriously asking me that?`;
  } else if (randNum < 0.51) {
    outputAnswer.innerHTML = `...`;
  } else if (randNum < 0.6) {
    outputAnswer.innerHTML = `I can't say off the top of my head.`;
  } else if (randNum < 0.7) {
    outputAnswer.innerHTNL = `Easiest yes.`;
  } else if (randNum < 0.75) {
    outputAnswer.innerHTNL = `Little bit stumped, ask again.`;
  } else if (randNum < 0.85) {
    outputAnswer.innerHTML = `You know the answer to that,`;
  } else if (randNum < 1) {
    outputAnswer.innerHTML = `Yes`;
  }
}
