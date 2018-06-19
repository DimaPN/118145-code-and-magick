'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;

var GAP = 50;
var FONT_GAP = 14;
var TEXT_HEIGHT = 16;
var BAR_HEIGHT = CLOUD_HEIGHT - 5 * FONT_GAP - 3 * TEXT_HEIGHT;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура  вы победили!', CLOUD_X + 2 * FONT_GAP, CLOUD_Y + 2 * FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * FONT_GAP, CLOUD_Y + 3 * FONT_GAP);

  for (var i = 0; i < players.length; i++) {
    players[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'green';
    /* if (players[i] == 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'green';
    }*/
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - 2 * FONT_GAP - TEXT_HEIGHT, BAR_WIDTH, -1 * (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT);
    ctx.fillText(times[i].toFixed(), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, (CLOUD_HEIGHT - 2 * FONT_GAP - TEXT_HEIGHT) + (-1 * (BAR_HEIGHT * times[i]) / maxTime));
  }

};


