const measureRainSwitch = inches => {
  switch (inches) {
    case 0:
      return 'drought';
    case 1: 
      return 'dry';
    case 2:
    case 3:
      return 'average';
    case 4:
    case 5:
      return 'rainy';
    default:
      return 'flood';
  }
};

const rounderSwitch = (float, roundingSetting) => {
  switch (roundingSetting) {
    case 'up':
      return Math.ceil(float);
    case 'down':
      return Math.floor(float);
    default:
      return Math.round(float);
  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
