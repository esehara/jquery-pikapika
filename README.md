# jQuery PikaPika!!

Everythink PikaPikalize !!

- [example for GitHub Pages](http://esehara.github.io/jquery-pikapika/)

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/esehara/jquery-pikapika/master/dist/jquery.jquery-rainbow.min.js
[max]: https://raw.githubusercontent.com/esehara/jquery-pikapika/master/dist/jquery.jquery-rainbow.js

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

### Change Interval


```javascript

// default = 100

$('#this-is-very-speedy').pikapika({interval: 50});
``

### Css Change

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
