# jQuery PikaPika!!

Everything PikaPikalize !!

- [example for GitHub Pages](http://esehara.github.io/jquery-pikapika/)

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/esehara/jquery-pikapika/master/dist/jquery.pikapika.min.js
[max]: https://raw.githubusercontent.com/esehara/jquery-pikapika/master/dist/jquery.pikapika.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.pikapika.min.js"></script>
<script>
jQuery(function($) {
  $('body').pikapika();
});
</script>
```

## Examples

### Interval


```javascript

// default = 100

$('#this-is-very-speedy').pikapika({interval: 50});
```

### Css

```javascript

// default = 'color'

$('#background-pikapika').pikapika({css: 'background-color'});
```

### n separate choice color

```javascript

// default = 32
// this option is n color random choice
// example, set 32, choice color in [0, 32, 64, 96 ... 256]

$('#more-pikapika-color').pikapika({colorstep: 16});
```

### color range

```javascript
// default = {range_r: [0, 255], range_g: [0, 255], range_b: [0, 255]}

$('#pikapika-red-color').pikapika({range_r: [128, 255], range_g: [0, 64], range_b: [0, 64]}); 
```
