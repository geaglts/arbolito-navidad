// Christmas
function christmas_tree(heigth = 10) {
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

console.log(christmas_tree(10));
