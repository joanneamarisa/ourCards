let table;
let rows;
let qs;
let as;
let Q;
let Qlist = [];
let textOnCard;
var click = false;
var nextButton, aButton;
let j = 0;
let photo1, photo2;
let font;

function preload() {
  table = loadTable("jo-calvin.csv", "csv", "header");
  photo1 = loadImage("jcfc-01.png");
  photo2 = loadImage("jcfc-02.png");
  font = loadFont("New Kansas Light.otf");
}

function setup() {
  cnv = createCanvas(1080, 1800);
  background("beige");
  rows = table.getRowCount();

  for (let i = 0; i < 100; i++) {
    Q = int(random(0, rows));
    Qlist.push(Q);
  }

  console.log(Qlist);

  nextButton = createButton("NEXT QUESTION");
  nextButton.position(width /2-15, height - 150);
  nextButton.style("font-size", "24px");
  nextButton.mousePressed(goNext);
  aButton = createButton("FLIP CARD");
  aButton.position(width / 6-15, height - 150);
  aButton.style("font-size", "24px");
  aButton.mousePressed(flipCard);

  rectMode(CENTER);

  //TITLE
  textAlign(CENTER);
  fill("blue");
  textSize(45);
  textFont(font);
  text("Relationship flash cards!", width / 2, 100);
  textSize(24);
  text("Calvin and Joanne, June 2024 (first year anniversary)", width / 2, 130);
  textSize(18);
  text(
    "*Click on buttons to flip cards and reveal answer, or proceed to next question",
    width / 2,
    height - 50
  );
}

function draw() {
  // THE CARD
  let shadowDist = 6;
  noStroke();
  fill(120, 120, 120, 15);
  rect(
    shadowDist + width / 2,
    shadowDist + height / 2,
    (width * 3) / 4,
    height / 2
  );
  fill(255);
  rect(width / 2, height / 2, (width * 3) / 4, height / 2);

  // QUESTION LIST
  qs = table.getString(Qlist[j], "QUESTIONS");
  as = table.getString(Qlist[j], "ANSWERS");

  //FLIPPING METHOD
  if (click) {
    textOnCard = as;
  } else {
    textOnCard = qs;
  }

  textSize(27);
  fill(50);
  text(textOnCard, width / 2, height / 2 - 20, (width * 3) / 4);

  // STICKERS
  imageMode(CENTER);
  photo1.resize(120, 0);
  photo2.resize(120, 0);
  image(photo1, (width * 3) / 4 + 60, height / 4 + 75);
  image(photo2, width / 5, (height * 3) / 5 + 50);
}

function flipCard() {
  // if (
  //   mouseX <= (width * 3) / 4 &&
  //   mouseX >= width / 4 &&
  //   mouseY <= (height * 3) / 4 &&
  //   mouseY >= height / 4
  // ) {
  //   console.log("MOUSE IS IN CARD");
    // FLIPPING METHOD
    if (click) {
      click = false;
    } else {
      click = true;
    }
  // }
}

function goNext() {
  click = false;
  j = j + 1;
}
