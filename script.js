var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }

  setTwo();
  setTwo();
}
var c = 0;
function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = "";
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num.toString();
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192");
    }
  }
  if (num == 2048) {
    if (c == 0) c = c + 1;
    else {
      c = 0;
      gameWin();
    }
  }
}
var v = 0;
var up=0;
var down=0;
var left=0;
var right=0;
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft" || e.key == "a" || e.key == "A") {
    let f1 = 0;
    let f2=0;
    let count = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[r][c] == board[r][c + 1]) f1 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[c][r] == board[c + 1][r]) f2 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (board[r][c] > 0) count++;
      }
    }
    if (f1 == 0 && f2==0 && count == 16) {
      if (v == 0) v = v + 1;
      else {
        v = 0;
        gameOver();
      }
    }
    slideLeft();
    if(left==0 || f1==1)
    {
      up=0;
      down=0;
      left=1;
      right=0;
      setTwo();
    }
  } else if (e.code == "ArrowRight" || e.key == "d" || e.key == "D") {
    let f1 = 0;
    let f2=0;
    let count = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[r][c] == board[r][c + 1]) f1 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[c][r] == board[c + 1][r]) f2 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (board[r][c] > 0) count++;
      }
    }
    if (f1 == 0 && f2==0 && count == 16) {
      if (v == 0) v = v + 1;
      else {
        v = 0;
        gameOver();
      }
    }
    slideRight();
    if(right==0 || f1==1)
    {
      up=0;
      down=0;
      left=0;
      right=1;
      setTwo();
    }
  } else if (e.code == "ArrowUp" || e.key == "w" || e.key == "W") {
   let f1 = 0;
    let f2=0;
    let count = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[r][c] == board[r][c + 1]) f1 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[c][r] == board[c + 1][r]) f2 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (board[r][c] > 0) count++;
      }
    }
    if (f1 == 0 && f2==0 && count == 16) {
      if (v == 0) v = v + 1;
      else {
        v = 0;
        gameOver();
      }
    }
    slideUp();
    if(up==0 || f2==1)
    {
      up=1;
      down=0;
      left=0;
      right=0;
      setTwo();
    }
  } else if (e.code == "ArrowDown" || e.key == "s" || e.key == "S") {
   let f1 = 0;
    let f2=0;
    let count = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[r][c] == board[r][c + 1]) f1 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 1; c++) {
        if (board[c][r] == board[c + 1][r]) f2 = 1;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (board[r][c] > 0) count++;
      }
    }
    if (f1 == 0 && f2==0 && count == 16) {
      if (v == 0) v = v + 1;
      else {
        v = 0;
        gameOver();
      }
    }
    slideDown();
    if(down==0 || f2==1)
    {
      up=0;
      down=1;
      left=0;
      right=0;
      setTwo();
    }
  }
  document.getElementById("score").innerText = score;
});

function filterZero(row) {
  return row.filter((num) => num != 0);
}

function slide(row) {
  row = filterZero(row);
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }
  row = filterZero(row);

  while (row.length < columns) {
    row.push(0);
  }
  return row;
}
function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    board[r] = row.reverse();
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function setTwo() {
  if (!hasEmptyTile()) {
    return;
  }
  let found = false;
  while (!found) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);
    if (board[r][c] == 0) {
      board[r][c] = Math.random() > 0.1 ? 2 : 4;
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      var x = Math.random() > 0.1 ? 2 : 4;
      tile.innerText = x;
      if (x == 2) {
        tile.classList.add("x2");
      } else {
        tile.classList.add("x4");
      }
      found = true;
    }
  }
}

function hasEmptyTile() {
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 0) {
        return true;
      }
    }
  }
  return false;
}
let saveData = () => {
  localStorage.setItem("data", JSON.stringify(data));
};
document.getElementById("playerName").addEventListener("keypress", (player) => {
  if (player.key === "Enter") {
    data.push({
      name: document.getElementById("playerName").value,
      score: score,
    });
    data = mergeSort(data);
    saveData();
    window.location.href =
      "https://asik-ifthaker-hamim.github.io/2048/leaderBoard.html";
  }
});
let gameOver = () => {
  document.getElementById("gameOver").style.display = "flex";
  document.getElementById("playerName").style.display = "block";
};
let gameWin = () => {
  document.getElementById("gameWin").style.display = "flex";
  document.getElementById("playerName").style.display = "block";
};
