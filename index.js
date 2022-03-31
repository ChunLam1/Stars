let taille = 0;
function star(firstStar) {
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

  // let string = "";
  // for (let i = 0;i<3*firstStar-1;i++ ){
  //     string +="&nbsp;";
  // }
  // string +="*";
  // // document.write(string)
  // let t = string
  // // for (let j=0;j<firstStar*2-1;j++){
  //     t= t.slice(0, -1)
  // // }
  // document.write(t)
}
star(5);

function horizontal(stars) {
  let i, j, k;
  let variable = 0;
  if (stars % 2 === 1) {
    variable = 1;
  }
  for (i = 2 * stars + variable; i >= 1; i--) {
    document.write("*");
    taille++;
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
horizontal(5);

function milieu(etoile) {
  let offset = 1;
  for (let i = 0; i < etoile * 2 - 1; i++) {
    if (i < offset) {
      document.write("&nbsp;&nbsp;");
    }else if(i==offset){
        document.write("*")
    }
  }
}
milieu(5);
