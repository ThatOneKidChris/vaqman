const pacmaze = [
  "############################",
  "#............##............#",
  "#.####.#####.##.#####.####.#",
  "#@####.#####.##.#####.####@#",
  "#.####.#####.##.#####.####.#",
  "#..........................#",
  "#.####.##.########.##.####.#",
  "#.####.##.########.##.####.#",
  "#......##....##....##......#",
  "######.##### ## #####.######",
  "     #.##### ## #####.#     ",
  "     #.##    ##    ##.#     ",
  "     #.## ######## ##.#     ",
  "######.## #      # ##.######",
  "      .   #      #   .      ",
  "######.## #      # ##.######",
  "     #.## ######## ##.#     ",
  "     #.##          ##.#     ",
  "     #.## ######## ##.#     ",
  "######.## ######## ##.######",
  "#......##....##....##......#",
  "#.####.##.########.##.####.#",
  "#.####.##.########.##.####.#",
  "#..........................#",
  "#.####.#####.##.#####.####.#",
  "#@####.#####.##.#####.####@#",
  "#.####.#####.##.#####.####.#",
  "#............##............#",
  "############################"
]
let player;

function setup() {
  createCanvas(400, 400);
  player = new Pacman({
    id: "Ethan",
    pos: {
      x: 14,
      y: 17
    }
  });
}

function draw() {
  background(0);
  renderPacmaze();
  player.render(width / 28, height / 29, 0,     0);
  //            ^ x-scl     ^ y-scl      ^ offx ^ offy
  if (frameCount % 10 == 0) player.update();
  if (pacmaze[player.pos.y][player.pos.x] == "#") player.bonk();
}

function renderPacmaze() {
  let w = width / 28, h = height / 29;
  pacmaze.forEach((row, i) => row.split("").forEach((cell, j) => {
    if (cell == "#") {
      fill(0, 0, 255);
      rect(j * w, i * h, w, h);
    } else if (cell == ".") {
      fill(255);
      ellipse(j * w + (w * 0.5), i * h + (h * 0.5), w * 0.5, h * 0.5);
    } else if (cell == "@") {
      fill(255);
      ellipse(j * w + (w * 0.5), i * h + (h * 0.5), w, h);
    }
  }));
}

function keyPressed(event) {
  if (event.key == "ArrowRight") player.update({x: 1, y: 0});
  else if (event.key == "ArrowUp") player.update({x: 0, y: -1});
  else if (event.key == "ArrowLeft") player.update({x: -1, y: 0});
  else if (event.key == "ArrowDown") player.update({x: 0, y: 1});
}
