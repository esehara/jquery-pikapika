/*! pikapika - v0.0.1 - 2014-11-01
* https://github.com/esehara/jquery-pikapika
* Copyright (c) 2014 esehara shigeo; Licensed MIT */
(function ($) {
  var previousColor = null;
  var generateRandomColor = function() {
    var seedColor = function() {
      return (Math.floor(Math.random() * 9) * 32).toString(16);
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
      $(elem).css(options.css, generateRandomColor()); 
    }, options.interval);
  };

  $.pikapika.options = {
    interval: 100,
    css: 'color'
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
