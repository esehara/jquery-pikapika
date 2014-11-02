$(function() {
  $('.rainbow').pikapika();
  $('.speedy-rainbow').pikapika({interval: 20});
  $('.rainbow-background').pikapika({css: 'background-color'});
  $('.smooth-rainbow').pikapika({colorstep: 1});
  $('.zatsu-rainbow').pikapika({colorstep: 64});
  $('.rainbow-range-r').pikapika(
    {range_r: [128, 256], range_b: [0, 64], range_g: [0, 64]}
  );
});
