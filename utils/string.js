export const normalizeStringLiteral = (stringLiteral) => {
  const resultLines = [];
  const splitLines = stringLiteral.split("\n");
  let firstContentLine = 0;

  while (splitLines[firstContentLine].trim() === "") {
    firstContentLine++;
  }

  const firstLine = splitLines[firstContentLine];
  let initialSpaces = 0;

  for (const char of firstLine) {
    if (char !== " ") {
      break;
    }

    initialSpaces++;
  }

  for (const line of splitLines) {
    resultLines.push(line.slice(initialSpaces));
  }

  return resultLines.join("\n");
};

export const slugify = (string) => {
  return String(string)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};
