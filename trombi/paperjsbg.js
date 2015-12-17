paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

   // Créer un projet vide et une view pour le canvas
   paper.setup('myCanvas');
var point = view.center;

var colors = [];
var cycles = 4;
for (var i = 0, l = 5; i < l; i++) {
 var brightness = 0.6 - (i / l) * 0.8;
 var hue = i / l * cycles * 2;
 var color = {
	 hue: hue,
	 saturation: 0.8,
	 brightness: brightness
 };
 colors.push(color);
}

var radius = Math.max(view.size.width, view.size.height) * 0.5;

var path = new Path.Rectangle({
 rectangle: view.bounds,
 fillColor: {
	 origin: point,
	 destination: point + [radius, 0.2],
	 gradient: {
		 stops: colors,
		 radial: true
	 }
 }
});

var color = path.fillColor;
var gradient = color.gradient;
var mouseDown = false;
var mousePoint = view.center;

function onMouseDown(event) {
 mouseDown = true;
 mousePoint = event.point;
}

function onMouseDrag(event) {
 mousePoint = event.point;
}

function onMouseUp(event) {
 vector.length = 35;
 mouseDown = false;
}

var grow = false;
var vector = new Point(150, 0);

function onFrame() {
 for (var i = 0, l = gradient.stops.length; i < l; i++)
	 gradient.stops[i].color.hue -= 20;
 if (grow && vector.length > 300) {
	 grow = false;
 } else if (!grow && vector.length < 75) {
	 grow = true;
 }
 if (mouseDown) {
	 point = point + (mousePoint - point) / 10;
 } else {
	 vector.length += (grow ? 1 : -8);
	 vector.angle += 16;
 }
 color.highlight = mouseDown ? point : point + vector;
}

function onResize(event) {
 point = view.center;
 path.bounds = view.bounds;
 var color = path.fillColor;
 color.origin = point;
 var radius = Math.max(view.size.width, view.size.height) * 0.75;
 color.destination = point + [radius, 0];
}var point = view.center;

var colors = [];
var cycles = 4;
for (var i = 0, l = 5; i < l; i++) {
 var brightness = 0.6 - (i / l) * 0.8;
 var hue = i / l * cycles * 2;
 var color = {
	 hue: hue,
	 saturation: 0.8,
	 brightness: brightness
 };
 colors.push(color);
}

var radius = Math.max(view.size.width, view.size.height) * 0.5;

var path = new Path.Rectangle({
 rectangle: view.bounds,
 fillColor: {
	 origin: point,
	 destination: point + [radius, 0.2],
	 gradient: {
		 stops: colors,
		 radial: true
	 }
 }
});

var color = path.fillColor;
var gradient = color.gradient;
var mouseDown = false;
var mousePoint = view.center;

function onMouseDown(event) {
 mouseDown = true;
 mousePoint = event.point;
}

function onMouseDrag(event) {
 mousePoint = event.point;
}

function onMouseUp(event) {
 vector.length = 35;
 mouseDown = false;
}

var grow = false;
var vector = new Point(150, 0);

function onFrame() {
 for (var i = 0, l = gradient.stops.length; i < l; i++)
	 gradient.stops[i].color.hue -= 20;
 if (grow && vector.length > 300) {
	 grow = false;
 } else if (!grow && vector.length < 75) {
	 grow = true;
 }
 if (mouseDown) {
	 point = point + (mousePoint - point) / 10;
 } else {
	 vector.length += (grow ? 1 : -8);
	 vector.angle += 16;
 }
 color.highlight = mouseDown ? point : point + vector;
}

function onResize(event) {
 point = view.center;
 path.bounds = view.bounds;
 var color = path.fillColor;
 color.origin = point;
 var radius = Math.max(view.size.width, view.size.height) * 0.75;
 color.destination = point + [radius, 0];
}
}
