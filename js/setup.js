'use strict';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const similarListElement = userDialog.querySelector('.setup-similar-list');

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['Топольницкая', 'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Нионго', 'Ирвинг'];
const COLORS_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

const COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
const AMOUNT_WIZARDS = 4;

/**
 * @param {Array} array
 * @returns {Number}
 */
const getRandomIndex = function (array) {
  if (array.length === 0) {
    throw new Error('The `array` argument must contain at least one element');
  }
  return Math.floor(Math.random() * array.length);
};

// Сборка объекта, заполнение рандомными данными
const createWizard = function () {
  const wizardName = WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)];
  const wizardSurname = WIZARD_SURNAMES[getRandomIndex(WIZARD_SURNAMES)];

  return {
    name: wizardName + ' ' + wizardSurname,
    coatColor: COLORS_COATS[getRandomIndex(COLORS_COATS)],
    eyesColor: COLORS_EYES[getRandomIndex(COLORS_EYES)]
  }
};

/**
 * @param {object} wizard
 */
const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

const wizards = new Array(AMOUNT_WIZARDS);
const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  wizards[i] = createWizard();
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
