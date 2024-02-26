const ParagraphBtn = document.getElementById("paragraph-type");
const LineBtn = document.getElementById("line-type");
const WordBtn = document.getElementById("word-type");
const IncreaseBtn = document.getElementById("increase-button");
const DecreaseBtn = document.getElementById("decrease-button");
const ShowCount = document.getElementById("show-count");
const CopyBtn = document.getElementById("copy-to-clipboard-button");
const TextArea = document.getElementById("text-area");

let Options = {
  Type: "Paragraph",
  Count: 1,
};
let WordArray = [
  "bus",
  "nomad",
  "tent",
  "computer",
  "girl",
  "desert",
  "table",
  "handsome",
  "the sun",
  "dying light",
  "resident",
  "bulb",
  "alert",
  "red",
  "chopper",
  "rifle",
  "ground",
  "craftsmaster",
  "blacksmith",
  "metro",
  "cross",
  "door",
  "window",
  "mother",
  "nemesis",
  "wind",
  "mill",
  "power",
  "generator",
  "perfume",
  "talent",
  "heater",
  "mouse",
  "cat",
  "pizza",
  "hot",
  "nouse",
  "wings",
  "eagle",
  "angry",
  "bird",
  "carpet",
  "tea",
  "captain black",
  "hello",
  "world",
  "random",
  "ok",
  "lorem",
];
let LineArray = [
  "Bus nomad tent computer girl desert table handsome the sun dying light",
  "Resident bulb alert red chopper rifle ground craftsmaster blacksmith",
  "Metro cross door window mother nemesis wind mill power generator",
  "Perfume talent heater mouse cat pizza hot nouse wings eagle",
  "Angry bird carpet tea Captain Black hello world random OK",
];
let Paragraph =
  "The bus nomad tent computer girl desert table handsome the sun dying light resident bulb alert red chopper rifle ground craftsmaster blacksmith metro cross door window mother nemesis wind mill power generator perfume talent heater mouse cat pizza hot nouse wings eagle angry bird carpet tea captain black hello world random ok lorem.";

function HighLightButton(ID) {
  let TypeButtons = document.querySelectorAll(".type-button");
  TypeButtons.forEach((Button) => {
    if (Button.id === ID) Button.style.backgroundColor = "#3bb150";
    else Button.style.backgroundColor = "";
  });
}
function TextGenerator() {
  TextArea.value = "";
  if (Options.Type === "Paragraph") {
    let Counter = Options.Count;
    for (n = 0; n < Counter; n++) {
      TextArea.value += Paragraph;
    }
  }
  if (Options.Type === "Line") {
    let Cap = Options.Count;
    let Counter = 0;
    let Index = 0;
    while (Counter < Cap) {
      if (Index > LineArray.length - 1) Index = 0;
      TextArea.value += LineArray[Index] + " ";
      Index++;
      Counter++;
    }
  }
  if (Options.Type === "Word") {
    let Cap = Options.Count;
    let Counter = 0;
    let Index = 0;
    while (Counter < Cap) {
      if (Index > WordArray.length - 1) Index = 0;
      TextArea.value += WordArray[Index] + " ";
      Index++;
      Counter++;
    }
  }
}
CopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(TextArea.value);
});
ParagraphBtn.addEventListener("click", () => {
  Options.Type = "Paragraph";
  HighLightButton("paragraph-type");
  TextGenerator();
});
LineBtn.addEventListener("click", () => {
  Options.Type = "Line";
  HighLightButton("line-type");
  TextGenerator();
});
WordBtn.addEventListener("click", () => {
  Options.Type = "Word";
  HighLightButton("word-type");
  TextGenerator();
});
IncreaseBtn.addEventListener("click", () => {
  if (Options.Count > 100) return false;
  Options.Count++;
  ShowCount.value = Options.Count;
  TextGenerator();
});
DecreaseBtn.addEventListener("click", () => {
  if (Options.Count === 0) return false;
  Options.Count--;
  ShowCount.value = Options.Count;
  TextGenerator();
});
ShowCount.addEventListener("change", () => {
  if (Options.Count < 0) return false;
  Options.Count = Number(ShowCount.value);
  TextGenerator();
});

window.onload = function () {
  Options.Type = "Paragraph";
  Options.Count = 1;
  ShowCount.value = Options.Count;
  HighLightButton("paragraph-type");
  TextGenerator();
};
