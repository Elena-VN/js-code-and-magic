const CLOUD_X = 100;
      CLOUD_Y = 10,

      CLOUD_WIDTH = 420,
      CLOUD_HEIGHT = 270,
      CLOUD_COLOR_SHADOW = 'rgba(0, 0, 0, .7)',
      CLOUD_COLOR = '#fff',

      GAP = 10,

      TEXT_GAP = 40,
      TEXT_FONT = '16px PT Mono',
      TEXT_COLOR = '#000',
      TEXT_BASELINE = 'hanging',
      TEXT_WIN = 'Ура вы победили!',
      TEXT_LIST_RESULT = 'Список результатов:',

      ROUND_NUMBER = 0,

      BAR_WIDTH = 40,
      BAR_HEIGHT = 150,
      BAR_GAP_X = 90,
      BAR_GAP_Y = 235,
      BAR_GAP = 15,

      NAME_PLAYER = 'Вы',
      PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

let creatureCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  },

  calculateHeight = function (valueTime, maxTime) {
    return (BAR_HEIGHT * valueTime) / maxTime ^ ROUND_NUMBER; // ^ ROUND_NUMBER округление до целого
  },

  drawingBAR = function (ctx, x, y, width, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, BAR_WIDTH, width);
  },

  randomColor = function (min, max) {
    let rand = (Math.random() * (max + min) - min) * 100;
    rand = Math.round(rand);
    return rand;
  },

  drawingName = function (ctx, name, x, y) {
    ctx.font = TEXT_FONT;
    ctx.fillStyle = TEXT_COLOR;
    ctx.textBaseline = TEXT_BASELINE;
    ctx.fillText(name, x, y);
  };

window.renderStatistics = function (ctx, names, times) {
  creatureCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR_SHADOW);
  creatureCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.textBaseline = TEXT_BASELINE;
  ctx.fillText(TEXT_WIN, CLOUD_X + TEXT_GAP, TEXT_GAP - GAP);
  ctx.fillText(TEXT_LIST_RESULT, CLOUD_X + TEXT_GAP, TEXT_GAP + GAP);

  //поиск бОльшего времени
  let maxTime = times[0];
  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] ^ ROUND_NUMBER;

    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  for (let i = 0; i < times.length; i++) {
    //CALCULATE HEIGHTS
    let heightsBAR = calculateHeight(times[i], maxTime),
        positionX = BAR_GAP_X;

    if (i < times.length) {
      positionX = BAR_WIDTH + BAR_GAP_X * i;
    }

    let otherPlayersColor = 'hsl(240, ' + randomColor(0, 1) + '%, ' + randomColor(0.1, 1) + '%)',
        colorsBAR = names[i] === NAME_PLAYER ? PLAYER_COLOR : otherPlayersColor;

    drawingBAR(ctx, CLOUD_X + positionX + BAR_GAP, BAR_GAP_Y - heightsBAR, heightsBAR, colorsBAR);
    drawingName(ctx, names[i], CLOUD_X + positionX + BAR_GAP, BAR_GAP_Y + GAP);
  }
};