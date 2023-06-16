let draw = () => {
    return (document.getElementById("board").innerHTML = data
      .map((item) => {
        return `<div class="player">${item.name}: ${item.score}</div>`;
      })
      .join(""));
  };
  draw();
