const EXTRA_MENU_CHANCE = 0.4;
const TOGGLE_LANGUAGE_CHANCE = 0.8;
const SCHEDULE_RELOAD_CHANCE = 0.5;
const MOUSE_RANDOM_CHANCE = 0.01;
const fab = document.getElementById("fab");
const extraMenu = document.getElementById("extra-menu");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");
const nl = document.getElementById("nl");
const en = document.getElementById("en");
const selectedLanguage = document.getElementById("selected-language");
const languageSettings = document.getElementById("language-settings");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const m4 = document.getElementById("m4");
const agenda = document.getElementById("agenda");
const more = document.getElementById("more");

const greeting = document.getElementById("greeting");

function getSelectedLanguage() {
  if (nl.classList.contains("selected")) {
    return "nl";
  } else {
    return "en";
  }
}

function toggleLanguage() {
  if (getSelectedLanguage() === "nl") {
    english();
  } else {
    dutch();
  }
}

function dutch() {
  nl.classList.add("selected");
  en.classList.remove("selected");
  languageSettings.innerText = "Taalinstellingen";
  selectedLanguage.innerText = "Dutch";
  m1.innerText = "Wie is Toi?";
  m2.innerText = "Onpraktisch";
  m3.innerText = "Ontwikkeling van memes";
  m4.innerText = "Grappen en grollen";
  greeting.innerText = "Hallo Toipi! 👋";
  agenda.innerText = "Op de agenda";
  more.innerText = "Meer onzin";
}

function english() {
  en.classList.add("selected");
  nl.classList.remove("selected");
  languageSettings.innerText = "Language settings";
  selectedLanguage.innerText = "English";
  m1.innerText = "Who is Toi?";
  m2.innerText = "Unpractical";
  m3.innerText = "Development of memes";
  m4.innerText = "Jokes and nonsense";
  greeting.innerText = "Hello Toipi! 👋";
  agenda.innerText = "On the agenda";
  more.innerText = "More nonsense";
}

nl.addEventListener("click", dutch);
en.addEventListener("click", english);

setTimeout(switchFontVariableRoot, Math.random() * 1000 + 500);

fab.addEventListener("click", toggleExtraMenu);

function toggleExtraMenu() {
  extraMenu.classList.toggle("show");
}

function delayLoadImage(ele, imgSize, delay) {
  ele.innerHTML = "<div class='spinner'></div>";
  const img = new Image();
  img.src = `https://picsum.photos/${imgSize}?${Math.random()}`;
  img.onload = () => {
    setTimeout(() => {
      ele.innerHTML = "";
      ele.appendChild(img);
    }, delay);
  };
}

function switchFontVariableRoot() {
  const root = document.documentElement;
  root.style.setProperty("--font", "Montserrat, sans-serif");
}

function doRandomStuff() {
  if (Math.random() <= EXTRA_MENU_CHANCE) {
    toggleExtraMenu();
    setTimeout(toggleExtraMenu, Math.random() * 1000 + 1000);
  }

  if (Math.random() <= TOGGLE_LANGUAGE_CHANCE) {
    toggleLanguage();
    setTimeout(toggleLanguage, Math.random() * 1123 + 1213);
  }

  if (Math.random() <= SCHEDULE_RELOAD_CHANCE) {
    setTimeout(() => {
      document.body.innerHTML = "";
      window.location.reload();
    }, Math.random() * 1000 + 2000);
  }

  delayLoadImage(t1, 800, Math.random() * 1000 + 222);
  delayLoadImage(t2, 400, Math.random() * 1000 + 333);
  delayLoadImage(t3, 400, Math.random() * 1000 + 444);
  delayLoadImage(t4, 400, Math.random() * 1000 + 111);
  delayLoadImage(t5, 400, Math.random() * 1000 + 555);
}

doRandomStuff();

onmousemove = () => {
  if (Math.random() <= MOUSE_RANDOM_CHANCE) {
    doRandomStuff();
  }
};
