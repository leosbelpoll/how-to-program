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
