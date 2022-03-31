let taille = 0;
let bot = 0;
const input = document.querySelector("input");

function TopStar(firstStar) {
  let i, j, k;
  for (i = 1; i <= firstStar; i++) {
    for (j = 3 * firstStar; j >= 1; j--) {
      if (i == j) document.write("*");
      else document.write("&nbsp;&nbsp;");
    }
    for (k = 2; k <= firstStar; k++) {
      if (i == k) document.write("*");
      else document.write("&nbsp;&nbsp;");
    }
    document.write("<br>");
  }
}

function horizontal(stars) {
  let i, j, k;
  let variable = 0;
  if (stars % 2 === 1) {
    variable = 1;
  }
  for (i = 2 * stars + variable; i >= 1; i--) {
    document.write("*");
    taille++;
    bot++;
  }
  let variable2 = stars * 2 - 1;
  for (j = 0; j < (variable2 - 2 > 0 ? variable2 - 2 : variable2); j++) {
    document.write("&nbsp;&nbsp;");
    taille++;
  }
  for (i = 2 * stars + variable; i >= 1; i--) {
    document.write("*");
    taille++;
  }
  document.write("<br>");
}

function milieu(etoile) {
  let offset = 1;
  for (let i = 0; i < etoile * 2 - 1; i++) {
    for (let k = 0; k < taille; k++) {
      if (k < offset || (k > offset && k < taille - offset - 1)) {
        document.write("&nbsp;&nbsp;");
      } else if (k == offset || k == taille - offset) {
        document.write("*");
      }
    }
    if (i < etoile - 1) {
      offset++;
    } else {
      offset--;
    }
    document.write("<br>");
  }
}

function botstar(firstStar) {
  let i, j, k;
  for (i = firstStar; i >= 1; i--) {
    for (j = 3 * firstStar; j >= 1; j--) {
      if (i == j) document.write("*");
      else document.write("&nbsp;&nbsp;");
    }
    for (k = 2; k <= firstStar; k++) {
      if (i == k) document.write("*");
      else document.write("&nbsp;&nbsp;");
    }
    document.write("<br>");
  }
}

function star(value) {
  TopStar(value);
  horizontal(value);
  milieu(value);
  horizontal(value);
  botstar(value);
}

input.addEventListener("change", () => {
  star(input.value);
});
