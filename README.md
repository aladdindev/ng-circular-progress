# Angularjs Circular Progress Bar

A doughnut animated progress bar for angularjs <br>
![](http://www.aladdian.com/img/circularprogress.png)

## Getting Started
Download the [minified version][min] or the [development version][max].

[min]: https://raw.github.com/UMaster/ng-circular-progress/master/dist/ng-circular-progress.min.js
[max]: https://raw.github.com/UMaster/ng-circular-progress/master/dist/ng-circular-progress.js

In your web page:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.1/angular.min.js"></script>
<script src="js/ng-circular-progress.min.js"></script>

<circular-progress></circular-progress>

```

## Options
You can specify a few options

| Option  | Description |
| ---- | ---- | ---- |
| progress | This is the progress. It should be from `0.0` to `1.0`. In case it is more than 1, it will be divided by 100 <br> Default: `1` |
| animation-speed | The animation speed <br> Default: `200` |
| size | The size of the canvas/circle <br> Default: `100` |
| stroke-width | The width of the arc <br> Default: `5` |
| stroke-color | The color of the arc <br> Default: `#c63d0f` |
| text-color | The color of the progress text <br> Default: `#3b3738` |

## Examples
```
<circular-progress animation-speed="100" progress="80" stroke-color="#ff4d4d" text-color="#ff4d4d" size="150"></circular-progress>
<circular-progress animation-speed="50" progress="0.5" stroke-color="#9966ff" text-color="#9966ff"></circular-progress>

```

## Unit tests
Jasmine development framework is used for unit testing
Current situation is: 8 specs, 0 failures

## Browsers Compatibility
The module uses the canvas element, so it must be supported by desktop and mobile modern browsers.

Old browsers are currently not supported ( <= Internet Explorer 8 )