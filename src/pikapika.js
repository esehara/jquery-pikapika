/*
 * jQuery Rainbow
 *
 * Copyright (c) 2014 esehara shigeo
 * Licensed under the MIT license.
 */

(function ($) {
  var previousColor = null;
  var generateRandomColor = function(options) {
    var colormul = function() {
      return 256 / options.colorstep;
    };
    var seedColor = function() {
      return (Math.floor(Math.random() * colormul()) * options.colorstep).toString(16);
    };
    var generateColorString = function() {
      var r = seedColor();
      var g = seedColor();
      var b = seedColor();
      return '#' + r + g + b;
    };
    var colorString = generateColorString();
    while (colorString === previousColor) {
      colorString = generateColorString();
    }
    if (previousColor) {
      previousColor = colorString;
    }
    previousColor = colorString;
    return colorString;
  };

  var setRainbowInterval = function(elem, options) {
    setInterval(function() {
      $(elem).css(options.css, generateRandomColor(options)); 
    }, options.interval);
  };

  $.pikapika = {
    options: {
      interval: 100,
      colorstep: 32,
      css: 'color'
    }
  };

  // Collection method.
  $.fn.pikapika = function (options) {
    options = $.extend({}, $.pikapika.options, options);
    return this.map(function () {
      // Do something to each selected element.
      setRainbowInterval(this, options);
    });
  };
}(jQuery));
