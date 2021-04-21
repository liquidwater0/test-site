const pageTitle = "site2";
document.title = pageTitle;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const closeButtons = document.querySelectorAll(".closeButton");
const popupOverlays = document.querySelectorAll(".overlay");
const popupButtons = document.querySelectorAll("[popup]");

closeButtons.forEach(function(c) { c.addEventListener("click", closePopup) });
popupOverlays.forEach(function(o) { o.addEventListener("click", closePopup) });
popupButtons.forEach(function(b) { b.addEventListener("click", openPopup) });

function openPopup() {
  document.getElementById(this.getAttribute("popup")).style.display = "block";
}

function closePopup() {
  if (this.classList.contains("overlay")) {
    this.parentElement.style.display = "none";
  } else {
    this.parentElement.parentElement.style.display = "none";  
  }
}

const titleTextField = document.getElementById("titleTextField");
const setTitleButton = document.getElementById("setTitleButton");

setTitleButton.addEventListener("click", changeTitle);
titleTextField.value = pageTitle;

function changeTitle() {
  document.title = titleTextField.value;
}

const logTextField = document.getElementById("logTextField");
const logButton = document.getElementById("logButton");

logButton.addEventListener("click", log);

function log() {
  console.log(logTextField.value);
  logTextField.value = "";
}

const alertTextField = document.getElementById("alertTextField");
const alertButton = document.getElementById("alertButton");

alertButton.addEventListener("click", customAlert);

function customAlert() {
  alert(alertTextField.value);
  alertTextField.value = "";
}

const askTextField = document.getElementById("askTextField");
const askButton = document.getElementById("askButton");
const responses = ["Yes", "No", "Maybe", "*Ignores*"];

askButton.addEventListener("click", ask);

function ask() {
  askTextField.value = responses[Math.floor(Math.random() * responses.length)];

  setTimeout(function() { askTextField.value = "" }, 3000);
}

const calcTextField = document.getElementById("calcTextField");
const calcButton = document.getElementById("calcButton");

calcButton.addEventListener("click", calculate);

function calculate() {
  const calcText = calcTextField.value.split(" ");

  if (calcText[1] == "+") {
    calcTextField.value = Number(calcText[0]) + Number(calcText[2]);
  } else if (calcText[1] == "-") {
    calcTextField.value = Number(calcText[0]) - Number(calcText[2]);
  } else if (calcText[1] == "/") {
    calcTextField.value = Number(calcText[0]) / Number(calcText[2]);
  } else if (calcText[1] == "x" || "*") {
    calcTextField.value = Number(calcText[0]) * Number(calcText[2]);
  }

  setTimeout(function() { calcTextField.value = "" }, 3000);
}

const colorTextField = document.getElementById("colorTextField");
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", changeMainColor);
colorTextField.value = getComputedStyle(document.documentElement).getPropertyValue("--mainColor");

function changeMainColor() {
  document.documentElement.style.setProperty("--mainColor", colorTextField.value);
}

const tempConvertTextField = document.getElementById("tempConvertTextField");
const tempConvertButton = document.getElementById("tempConvertButton");
const tempSelect = document.getElementById("tempSelect");

tempConvertButton.addEventListener("click", convertTemperatures);

function convertTemperatures() {
  if (tempSelect.value == 1) { //F to C
    tempConvertTextField.value = `${(Number(tempConvertTextField.value) - 32) * 5/9} C`;
  } else if (tempSelect.value == 2) { // C to F
    tempConvertTextField.value = `${(Number(tempConvertTextField.value) * 9/5) + 32} F`
  }

  setTimeout(function() { tempConvertTextField.value = "" }, 3000);
}

setInterval(randomColor, 1000);

function randomColor() {
  const cube = document.getElementById("cube");

  cube.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
}

document.getElementById("randomNumberButton").addEventListener("click", numberGenerator);

function numberGenerator() {
  const generatedNumber = document.getElementById("generatedNumber");
  const clickCounter = document.getElementById("clickAmount");

  generatedNumber.textContent = getRandomNumber(0, 100);

  if (localStorage.ClickAmount) {
    localStorage.ClickAmount = Number(localStorage.ClickAmount) + 1;
  } else {
    localStorage.ClickAmount = 1;
  }   
  clickCounter.textContent = localStorage.ClickAmount;
}

document.getElementById("clickAmount").textContent = localStorage.ClickAmount;

const commandLineTextField = document.getElementById("commandLineTextField");
const runCommandButton = document.getElementById("runCommandButton");

runCommandButton.addEventListener("click", runCommand);

function runCommand() {
  const commandText = commandLineTextField.value.split(" ");

  if (commandText[0] == "!commands") {
    runCommandButton.textContent = "Commands Listed!";
    commandLineTextField.value = "";
    commandLineTextField.style.borderColor = "lime";
    commandLineTextField.value = "!commands, !reload, !screen, !window";

    setTimeout(function() { 
      runCommandButton.textContent = "Run Command";
      commandLineTextField.style.borderColor = "rgb(154, 158, 158)";
    }, 3000);
  } else if (commandText[0] == "!reload") {
    runCommandButton.textContent = "Reloading! 3s";
    commandLineTextField.style.borderColor = "lime";
    commandLineTextField.value = "";

    setTimeout(function() { runCommandButton.textContent = "Reloading! 2s" }, 1000);
    setTimeout(function() { runCommandButton.textContent = "Reloading! 1s" }, 2000);
    setTimeout(function() { location.reload() }, 3000);
  } else if (commandText[0] == "!screen") {
    runCommandButton.textContent = "Screen Size Listed!";
    commandLineTextField.style.borderColor = "lime";
    commandLineTextField.value = `${screen.width}x${screen.height}`;

    setTimeout(function() { 
      runCommandButton.textContent = "Run Command";
      commandLineTextField.value = "";
      commandLineTextField.style.borderColor = "rgb(154, 158, 158)";
    }, 3000);
  } else if (commandText[0] == "!window") {
    runCommandButton.textContent = "Window Size Listed!";
    commandLineTextField.style.borderColor = "lime";
    commandLineTextField.value = `${window.innerWidth}x${window.innerHeight}`;

    setTimeout(function() { 
      runCommandButton.textContent = "Run Command";
      commandLineTextField.value = "";
      commandLineTextField.style.borderColor = "rgb(154, 158, 158)";
    }, 3000);
  } else {
    runCommandButton.textContent = "Invalid Command";
    commandLineTextField.style.borderColor = "red";
    commandLineTextField.value = "";

    setTimeout(function() { 
      runCommandButton.textContent = "Run Command";
      commandLineTextField.style.borderColor = "rgb(154, 158, 158)";
    }, 3000);
  }
}

document.getElementById("getAlertButton").addEventListener("click", getAlert);

function getAlert() {
  alert("Alert!");
}

setInterval(randomNumber, 500);

function randomNumber() {
  const randomNumber = document.getElementById("randomNumber");

  randomNumber.textContent = getRandomNumber(0, 100);
}

setInterval(dateAndTime, 0);

function dateAndTime() {
  const date = new Date();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dateButton = document.getElementById("dateTime");

  if (date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31) {
    dateButton.textContent = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}st, ${date.getFullYear()} ${date.toLocaleTimeString()}`;
  } else if (date.getDate() == 2 || date.getDate() == 22) {
    dateButton.textContent = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}nd, ${date.getFullYear()} ${date.toLocaleTimeString()}`;
  } else if (date.getDate() == 3 || date.getDate() == 23) {
    dateButton.textContent = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}rd, ${date.getFullYear()} ${date.toLocaleTimeString()}`;
  } else if (date.getDate() == 4 || date.getDate() == 5 || date.getDate() == 6 || date.getDate() == 7 || date.getDate() == 8 || date.getDate() == 9 || date.getDate() == 10 
    || date.getDate() == 11 || date.getDate() == 12 || date.getDate() == 13 || date.getDate() == 14 || date.getDate() == 15 || date.getDate() == 16 || date.getDate() == 17 
    || date.getDate() == 18 || date.getDate() == 19 || date.getDate() == 20 || date.getDate() == 24 || date.getDate() == 25 || date.getDate() == 26 || date.getDate() == 27 
    || date.getDate() == 28 || date.getDate() == 29 || date.getDate() == 30) {
    
    dateButton.textContent = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()} ${date.toLocaleTimeString()}`;
  }
}

const html = document.querySelector("html");
const lightModeRadio = document.getElementById("lightModeRadio");
const darkModeRadio = document.getElementById("darkModeRadio");

function setTheme() {
  localStorage.currentTheme = html.classList;
}

function getTheme() {
  if (localStorage.currentTheme) {
    html.classList = localStorage.currentTheme;
  } else {
    localStorage.currentTheme = "darkMode";
  }
  
  if (localStorage.currentTheme == "lightMode") {
    lightModeRadio.checked = true;
  } else if (localStorage.currentTheme == "darkMode") {
    darkModeRadio.checked = true;
  }
}

document.addEventListener("DOMContentLoaded", getTheme);
lightModeRadio.addEventListener("click", lightMode);
darkModeRadio.addEventListener("click", darkMode);

function lightMode() {
  html.classList = "lightMode";
  setTheme();
}
function darkMode() {
  html.classList = "darkMode";
  setTheme();
}

document.getElementById("resetButton").addEventListener("click", reset);

function reset() {
  const generatedNumber = document.getElementById("generatedNumber");

  generatedNumber.textContent = 0;
  document.title = pageTitle;
  titleTextField.value = pageTitle;
  colorTextField.value = "rgb(0, 160, 255)";
  document.getElementById("randomNumber").textContent = 0;
  document.documentElement.style.setProperty("--mainColor", "#2196f3");
}

//Materialize

$(document).ready(function() {
  $('select').formSelect();
});