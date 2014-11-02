/*! pikapika - v0.0.1 - 2014-11-02
* https://github.com/esehara/jquery-pikapika
* Copyright (c) 2014 esehara shigeo; Licensed MIT */
(function ($) {
  var previousColor = null;
  var generateRandomColor = function(options) {
    var colormul = function(rangeLength) {
      return rangeLength / options.colorstep;
    };
    var seedColor = function(range) {
      var rangeLength = range[1] - range[0];
      return (Math
        .floor((Math.random() * colormul(rangeLength)) * options.colorstep) + range[0])
        .toString(16);
    };
    var generateColorString = function(options) {
      var r = seedColor(options.range_r);
      var g = seedColor(options.range_g);
      var b = seedColor(options.range_b);
      return '#' + r + g + b;
    };
    var colorString = generateColorString(options);
    while (colorString === previousColor) {
      colorString = generateColorString(options);
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
      css: 'color',
      range_r: [0, 255],
      range_g: [0, 255],
      range_b: [0, 255]
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
