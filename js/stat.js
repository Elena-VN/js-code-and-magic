const CLOUD_X = 100;
const CLOUD_Y = 10;

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_COLOR_SHADOW = 'rgba(0, 0, 0, .7)';
const CLOUD_COLOR = '#fff';

const GAP = 10;

const TEXT_GAP = 40;
const TEXT_FONT = '16px PT Mono';
const TEXT_COLOR = '#000';
const TEXT_BASELINE = 'hanging';
const TEXT_WIN = 'Ура вы победили!';
const TEXT_LIST_RESULT = 'Список результатов:';

const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_GAP_X = 90;
const BAR_GAP_Y = 235;
const BAR_GAP = 15;

const NAME_PLAYER = 'Вы';
const PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x
 * @param {Number} y
 * @param {String} color
 */
const createCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

/**
 * @param {Number} valueTime
 * @param {Number} maxTime
 */
const calculateHeight = function (valueTime, maxTime) {
    return Math.round(BAR_HEIGHT * valueTime / maxTime);
  };

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {String} color
 */
const drawBar = function (ctx, x, y, width, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, BAR_WIDTH, width);
  };

/**
 * @param {Number} min
 * @param {Number} max
 */
const getRandomColor = function (min, max) {
    const rand = (Math.random() * (max + min) - min) * 100;
  return Math.round(rand);
};

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {String} name
 * @param {Number} x
 * @param {Number} y
 */
const drawName = function (ctx, name, x, y) {
    ctx.font = TEXT_FONT;
    ctx.fillStyle = TEXT_COLOR;
    ctx.textBaseline = TEXT_BASELINE;
    ctx.fillText(name, x, y);
  };

window.renderStatistics = function (ctx, names, times) {
  createCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR_SHADOW);
  createCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.textBaseline = TEXT_BASELINE;
  ctx.fillText(TEXT_WIN, CLOUD_X + TEXT_GAP, TEXT_GAP - GAP);
  ctx.fillText(TEXT_LIST_RESULT, CLOUD_X + TEXT_GAP, TEXT_GAP + GAP);

  // поиск бОльшего времени
  const maxTime = Math.round(Math.max.apply(null, times));

  for (let i = 0; i < times.length; i++) {
    let heightsBar = calculateHeight(times[i], maxTime),
        positionX = BAR_GAP_X;

    if (i < times.length) {
      positionX = BAR_WIDTH + BAR_GAP_X * i;
    }

    let otherPlayersColor = 'hsl(240, ' + getRandomColor(0, 1) + '%, ' + getRandomColor(0.1, 1) + '%)',
        colorsBAR = names[i] === NAME_PLAYER ? PLAYER_COLOR : otherPlayersColor;

    drawBar(ctx, CLOUD_X + positionX + BAR_GAP, BAR_GAP_Y - heightsBar, heightsBar, colorsBAR);
    drawName(ctx, names[i], CLOUD_X + positionX + BAR_GAP, BAR_GAP_Y + GAP);
  }
};
