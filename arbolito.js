// Christmas
function christmasTree(heigth = 10) {
  return new Array(heigth).fill(0).reduce((prev, _, index) => {
    const space = heigth - 1 - index;
    if (index < 2) {
      prev +=
        index === 0
          ? "\n" + " ".repeat(space - 1) + "*\n"
          : " ".repeat(space) + "0\n";
    } else prev += " ".repeat(space) + `${"0".repeat(index * 2 - 1)}\n`;
    return prev;
  }, "");
}

function christmasTreeWithFor(height) {
  for (let i = 0; i < height; i++) {
    const space = height - 1 - i;
    if (i < 2) {
      if (i === 0) console.log(" ".repeat(space - 1) + "*");
      else console.log(" ".repeat(space) + "0");
    } else console.log(" ".repeat(space) + `${"0".repeat(i * 2 - 1)}`);
  }
}

console.log(christmasTree(10));
christmasTreeWithFor(10);
