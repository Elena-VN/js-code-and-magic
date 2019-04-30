'use strict';

const userDialog = document.querySelector('.setup');

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
const COLORS_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

/**
 * Сборка объекта, заполнение рандомными данными
 */
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

/**
 * Задание 3
 */
const setupOpen = document.querySelector('.setup-open');
const setupClose = userDialog.querySelector('.setup-close');

const ESC_KEYCODE = 27;
const onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

const ENTER_KEYCODE = 13;

const openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

const wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
const wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

const setRandomColor = function () {
  wizardCoat.style.cursor = 'pointer';
  wizardEyes.style.cursor = 'pointer';
  wizardFireball.style.cursor = 'pointer';

  let indexCoat = 0;
  wizardCoat.addEventListener('click', function () {
    if (indexCoat === COLORS_COATS.length - 1) {
      indexCoat = 0;
    } else {
      indexCoat++;
    }
    wizardCoat.style.fill = COLORS_COATS[indexCoat];
  });

  let indexEyes = 0;
  wizardEyes.addEventListener('click', function () {
    if (indexEyes === COLORS_EYES.length - 1) {
      indexEyes = 0;
    } else {
      indexEyes++;
    }
    wizardEyes.style.fill = COLORS_EYES[indexEyes];
  });

  let indexFireball = 0;
  wizardFireball.addEventListener('click', function () {
    if (indexFireball === COLORS_FIREBALL.length - 1) {
      indexFireball = 0;
    } else {
      indexFireball++;
    }
    wizardFireball.style.backgroundColor = COLORS_FIREBALL[indexFireball];
    wizardFireball.querySelector('input').value = COLORS_FIREBALL[indexFireball];
  });
};

setRandomColor();

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
