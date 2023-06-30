const mapContainer = document.querySelector('#map-container');

const tiledMap = document.querySelector('#map');

mapContainer.style.width = '100vw';
mapContainer.style.height = '400px';
mapContainer.style.border = '2px solid #000';
mapContainer.style.overflow = 'hidden';

let tileWidth = 34, tileHeight = 34;

tiledMap.style.width = tileWidth * 20 + 'px';
tiledMap.style.height = tileHeight * 20 + 'px';


var map = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]

map = [""];


for (i=0; i<400-1; i++)
  {
map.push(Math.round(Math.random() ));
    console.log(map);
  }

for (i=0; i<map.length; i++)
  {
    if (map[i] == 1) {
      let newTile = document.createElement("div");
      newTile.style.width = tileWidth + 'px';
      newTile.style.height = tileWidth + 'px';
      newTile.style.backgroundColor = 'blue';
      newTile.style.border = '2px solid red';
      newTile.style.float = 'left';
      newTile.classList.add("tile");
      tiledMap.appendChild(newTile);
    } else if (map[i] == 0) {
      let newTile = document.createElement("div");
      newTile.style.width = tileWidth + 'px';
      newTile.style.height = tileHeight + 'px';
      newTile.style.backgroundColor = 'blue';
      newTile.style.border = '2px solid blue';
      newTile.style.opacity = '0.1';
      newTile.style.float = 'left';
      newTile.classList.add("tile");
      tiledMap.appendChild(newTile);
    }
    
  }



let left = 0, right = 0, up = 0, down = 0;

const moveLeft = document.querySelector('#move-left');
const moveRight = document.querySelector('#move-right');
const moveUp = document.querySelector('#move-up');
const moveDown = document.querySelector('#move-down');

moveLeft.addEventListener("touchstart", e => {
  console.log(e);
  left = 1;
});

moveLeft.addEventListener("touchend", e => {
  console.log(e);
  left = 0;
});


moveRight.addEventListener("touchstart", e => {
  console.log(e);
  right = 1;
});

moveRight.addEventListener("touchend", e => {
  console.log(e);
  right = 0;
});


moveUp.addEventListener("touchstart", e => {
  console.log(e);
  up = 1;
});


moveUp.addEventListener("touchend", e => {
  console.log(e);
  up = 0;
});


moveDown.addEventListener("touchstart", e => {
  console.log(e);
  down = 1;
});

moveDown.addEventListener("touchend", e => {
  console.log(e);
  down = 0;
});

let posX = 0, posY = 0;

if (!localStorage.getItem("posX")) {
  posX = 0;
  localStorage.setItem("posX", posX);
} else {
  posX = localStorage.getItem("posX");
  tiledMap.style.transform = 'translateX(' + posX + 'px)';
}

if (!localStorage.getItem("posY")) {
  posY = 0;
  localStorage.setItem("posY", posY);
} else {
  posY = localStorage.getItem("posY");
  tiledMap.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
}

setInterval(cameraMove, 10);
function cameraMove() {
  if (left == 1) {
    tiledMap.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
    posX++;
    localStorage.setItem("posX", posX);
  }
  if (right == 1) {
    tiledMap.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
    posX--;
    localStorage.setItem("posX", posX);
  }
  if (up == 1) {
    tiledMap.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
    posY++;
    localStorage.setItem("posY", posY);
  }
  if (down == 1) {
    tiledMap.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
    posY--;
    localStorage.setItem("posY", posY);
  }

}

document.addEventListener("keydown", e => {
  console.log(e.keyCode);
  if (e.keyCode == "37") {
    left = 1;
  } else {left = 0;}
  if (e.keyCode == "39") {
    right = 1;
  } else {right = 0;}
  if (e.keyCode == "38") {
    up = 1;
  } else {up = 0;}
  if (e.keyCode == "40") {
    down = 1;
  } else {down = 0;}
  
});

document.addEventListener("keyup", e => {
  left = 0;
  right = 0;
  up = 0;
  down = 0;
});