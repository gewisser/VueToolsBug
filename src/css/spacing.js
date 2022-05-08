const spacing = {};

const pointsSteps = 500;

for (let i = 0; i <= pointsSteps; i++) {
  spacing[i] = `${i}px`;
}

module.exports = {
  spacing: {
    ...spacing,
  },
};
