/*
 * ng-circular-progress
 * https://github.com/aladdindev/ng-circular-progress
 *
 * Copyright (c) 2016 Aladdin Dev
 * Licensed under the MIT license.
 */

(function(angular){
  var app = angular.module('ng-circular-progress', []);

  app.provider('circularProgressDefaults', function(){
    var options = {
      progress: "1",
      strokeWidth: "5",
      strokeColor: "#c63d0f",
      size: "100",
      textColor: "#3b3738",
      animationSpeed: 200
    };

    this.setOption = function(name, value){
      options[name] = value;
      return this;
    };

    this.$get = function(){
      return function(attributes){
        angular.forEach(options, function(value, key){
          if(attributes[key] === undefined){
            attributes[key] = value;
          }
          else{
            if(key === "progress"){
              var progress = parseFloat(attributes[key]);
              if(isNaN(progress)){
                attributes[key] = 1;
              }
              else{
                if(progress > 1 && progress <= 100){
                  progress /= 100;
                  attributes[key] = progress;
                }
              }
            }
            else if(key === "animationSpeed"){
              var speed = parseFloat(attributes[key]);
              if(isNaN(speed)){
                attributes[key] = 200;
              }
            }
          }
        });
      };
    };
  });

  app.directive('circularProgress', ['circularProgressDefaults', '$interval', function(circularProgressDefaults, $interval){
    return {
      restrict: 'E',
      scope: {
        progress: '@',
        strokeWidth: '@',
        strokeColor: '@',
        size: '@',
        textColor: '@',
        animationSpeed: '@'
      },
      replace: true,
      compile: function (element, attributes) {
        var stop;

        function drawArc() {
          var i = 0;
          var circle = element.children()[0];
          var text = element.children()[1];
          var angle = -1;
          var radius = attributes["size"] / 2 - attributes["strokeWidth"] / 2;

          var limit = (360 * attributes["progress"]);
          stop = $interval(
            function() {
              var d;
              angle += 1;
              
              var counter =  Math.floor(angle / 360 * 100) + '%';

              var radians= (angle/180) * Math.PI - Math.PI/2;
              var x = +attributes["size"]/2 + Math.cos(radians) * radius;
              var y = +attributes["size"]/2 + Math.sin(radians) * radius;
              var e = circle.getAttribute("d");
              
              if(i === 0) {
                d = e+ "M "+x + " " + y;
              }
              else {
                d = e+ " L "+x + " " + y;
              }
              if (angle >= limit) {
                $interval.cancel(stop);
              }
              
              circle.setAttribute("d", d);
              text.innerHTML = counter;
              
              i++;
            }, (1 / attributes["animationSpeed"]) * 400);
        }

        return {
          pre: function(scope, element, attributes){
            circularProgressDefaults(attributes);
          },
          post: function(scope, element, attributes){
            drawArc();
                
            element.on('$destroy', function() {
              if(stop != null){
                $interval.cancel(stop);
              }
            });

            angular.forEach(attributes, function(value, key){
              element.removeAttr(key);
            });

          }
        };
      },
            
      template:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" ' +
        'ng-attr-width="{{size}}px" ng-attr-height="{{size}}px" ng-attr-view_box="0 0 {{size}} {{size}}"> ' +
        '<path d="" id="arc" fill="none" ng-attr-stroke="{{strokeColor}}" ng-attr-stroke-width="{{strokeWidth}}px" /> ' +
        '<text ng-attr-fill="{{textColor}}" ng-attr-x="{{size/2}}" ng-attr-y="{{size/2}}" font-size="{{size/5}}px" ' +
        'text-anchor="middle" alignment-baseline="central"></text>' +
        '</svg>'
    };
  }]);
})(window.angular);