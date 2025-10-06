const measureRain = inches => {
  if ( inches === 0) {
    return 'drought';
  } else if (inches < 2) {
    return 'dry';
  } else if (inches < 4) {
    return 'average';
  } else if (inches < 6) {
    return 'rainy';
  } return 'flood';
};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return 'Hiss hiss!';
  } else if (breed === 'cat') {
    if (age < 5) {
      return 'Mew mew!'
    } return 'Meow meow!'
  } else if (breed === 'dog') {
    if (age < 5) {
      return 'Arf arf!'
    } else if (age < 10) {
      return 'Woof woof!'
    } return 'Boof!'
  } return 'Happy birthday!'
};

const funTypes = jsType => {
  if (typeof jsType === 'string') {
    return "That's just some text.";
  } else if (Number.isNaN(jsType)){
    return "Well, now you're just showing off.";
  } else if (typeof jsType === 'number') {
    return "That's a good number.";
  } else if (typeof jsType === 'boolean') {
    return 'To bool, or not to bool?'
  } else if (typeof jsType === 'undefined') {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) {
    return 'Nothing, and I did set that.';
  } else if (Array.isArray(jsType)) {
    return 'I order you to be indexed.';
  } else if (typeof jsType === 'object') {
    return 'Anybody got the key?'
  } 
};

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float);
  } else if (roundingSetting === 'down') {
    return Math.floor(float);
  } return Math.round(float);
};

const formatName = (first, last) => {
  let formattedFirst = first[0].toUpperCase() + first.slice(1).toLowerCase();
  let formattedLast = last[0].toUpperCase() + last.slice(1).toLowerCase();
  return `${formattedFirst} ${formattedLast}`;
};

const extractDomain = email => {
  let atSignIndex = email.indexOf('@');
  return email.slice(atSignIndex + 1);
};

const startsWithVowel = str => {
  if (str[0].match(/a|e|i|o|u/i)) {
    return true;
  } return false;
};

const rotate = (str, num) => {
  if (num % str.length === 0) {
    return str;
  }
  let firstLetter = str.length - num;
  return str.slice(firstLetter) + str.slice(0, firstLetter);
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
