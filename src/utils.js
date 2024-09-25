export const sort = (dominoes, order = "asc") => {
  if (order === "asc") {
    return dominoes.slice().sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  } else {
    return dominoes.slice().sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]));
  }
};

export const countDoubleNumber = (dominoes) => {
  return dominoes.filter((domino) => domino[0] === domino[1]).length;
};

export const removeDuplicates = (dominoes) => {
  const uniqueDominoes = [];
  const seen = new Set();

  dominoes.forEach(domino => {
    const sortedDomino = domino.slice().sort().toString();
    if (!seen.has(sortedDomino)) {
      uniqueDominoes.push(domino);
      seen.add(sortedDomino);
    }
  });

  return uniqueDominoes;
};

export const flipDominoes = (dominoes) => {
  return dominoes.map(domino => [domino[1], domino[0]]);
};

export const removeByTotalValue = (dominoes, totalValue) => {
  return dominoes.filter(domino => (domino[0] + domino[1]) !== totalValue);
};