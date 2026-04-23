document
  .querySelector(".hotspot.flashlight")
  .addEventListener("click", flashlight);

function flashlight() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Lommelygte";
  document.querySelector(".info-subheadline").textContent =
    "En lommelygte er en af de vigtigste ting i dit beredskab, når strømmen går.";
  document.querySelector("#efficiency").textContent =
    "Brug en lommelygte med ekstra batterier eller en model, der kan oplades. Hav den et fast sted, så du hurtigt kan finde den i mørke.";
  document.querySelector("#requirement").textContent =
    "Den giver sikkert lys, så du kan orientere dig, finde dine ting og bevæge dig rundt uden risiko. Den er også bedre end stearinlys, fordi den ikke kan starte brand.";
}

document.querySelector(".hotspot.radio").addEventListener("click", radio);

function radio() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Radio";
  document.querySelector(".info-subheadline").textContent =
    "En batteridrevet radio gør det muligt at få vigtig information, selv hvis internet eller mobilnet ikke virker.";
  document.querySelector("#efficiency").textContent =
    "Hav en radio med batterier eller håndsving, så du kan høre nyheder og officielle meldinger under en strømafbrydelse.";
  document.querySelector("#requirement").textContent =
    "Hvis strømmen forsvinder, kan telefon, tv og internet hurtigt blive svære at bruge. En radio hjælper dig med at holde dig opdateret og vide, hvad du skal gøre.";
}

document.querySelector(".hotspot.canned-food").addEventListener("click", can);

function can() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Dåsemad";
  document.querySelector(".info-subheadline").textContent =
    "Dåsemad er praktisk i en nødsituation, fordi det kan holde sig længe og ikke kræver køling.";
  document.querySelector("#efficiency").textContent =
    "Hav dåsemad eller anden langtidsholdbar mad, som er nem at opbevare og klar til at spise.";
  document.querySelector("#requirement").textContent =
    "Ved strømafbrydelse kan mad i køleskab og fryser blive dårlig. Dåsemad sikrer, at du stadig har noget at spise, selv uden strøm.";
}

document
  .querySelector(".hotspot.first-aid")
  .addEventListener("click", firstaid);

function firstaid() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Førstehjælpskit";
  document.querySelector(".info-subheadline").textContent =
    "Et førstehjælpskit gør det muligt at tage hurtigt hånd om små skader og akutte situationer.";
  document.querySelector("#efficiency").textContent =
    "Hav et førstehjælpskit med plaster, forbindinger, saks, desinfektion og andre vigtige ting samlet ét sted.";
  document.querySelector("#requirement").textContent =
    "Ved en strømafbrydelse kan det være sværere at få hjælp med det samme. Et førstehjælpskit gør, at du kan reagere hurtigt og give den første behandling.";
}

document.querySelector(".hotspot.water").addEventListener("click", water);

function water() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Drikkevand";
  document.querySelector(".info-subheadline").textContent =
    "Drikkevand er noget af det vigtigste at have i dit beredskab, fordi kroppen hurtigt mangler væske.";
  document.querySelector("#efficiency").textContent =
    "Hav nok drikkevand på lager til alle i hjemmet, så I kan klare jer i noget tid uden normal vandforsyning.";
  document.querySelector("#requirement").textContent =
    "Ved en strømafbrydelse kan adgangen til rent vand blive usikker. Drikkevand er nødvendigt for at holde kroppen i gang og for at undgå dehydrering.";
}

document.querySelector(".hotspot.blankets").addEventListener("click", blankets);

function blankets() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Tæpper";
  document.querySelector(".info-subheadline").textContent =
    "Tæpper hjælper med at holde kroppen varm, hvis strømmen går og boligen bliver kold.";
  document.querySelector("#efficiency").textContent =
    "Hav tæpper eller varme tekstiler klar, så du kan holde på varmen under en strømafbrydelse.";
  document.querySelector("#requirement").textContent =
    "Hvis varme og el forsvinder, kan temperaturen hurtigt falde. Tæpper gør det lettere at holde sig varm og tryg, især om natten eller i kolde perioder.";
}

document
  .querySelector(".hotspot.batteries")
  .addEventListener("click", batteries);

function batteries() {
  console.log("info");
  document.querySelector(".info-text > h2").textContent = "Batterier";
  document.querySelector(".info-subheadline").textContent =
    "Batterier er vigtige, fordi de holder dine vigtigste apparater i gang, når strømmen er væk.";
  document.querySelector("#efficiency").textContent =
    "Hav ekstra batterier liggende, så du kan bruge lommelygte, radio og andre nødvendige enheder under en strømafbrydelse.";
  document.querySelector("#requirement").textContent =
    "Uden batterier virker meget af dit nødudstyr ikke. Ekstra batterier gør, at du kan få lys, information og strøm til de ting, du har mest brug for.";
}
