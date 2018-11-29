var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame 
|| window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60)};
var canvas = document.createElement('canvas');
var width, height;
width = 800;
height = 600;

canvas.height = height;
canvas.width = width;

var context = canvas.getContext('2d');
