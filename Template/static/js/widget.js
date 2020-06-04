/////////////////////// SET UP /////////////////////////////////////////

var script= document.createElement('script');
   		script.type= 'text/javascript';
        script.src= 'https://apps.elfsight.com/p/platform.js';
		document.body.appendChild(script);
let Widget01 = "CoronaVirus";
let Widget02 = "Weather";
let Widget03 = "Block"

/////////////////////// WIDGET 1 ///////////////////////////////////////	
	
let pos = JSON.parse(window.localStorage.getItem(Widget01));
if (pos) {
	placeDiv(pos.x, pos.y, Widget01);
}
document.getElementById(Widget01).innerHTML = 
	"<i>Coronavirus Statistics</i>" +
	"<div class=\"col-sm block\">" +
   	"<script src=\"https://apps.elfsight.com/p/platform.js\"><\/script>" +
		"<div class=\"elfsight-app-8ed3c46c-ef8d-494a-ab54-59a482f5d2e0\"></div>" +
	"</div>";

/////////////////////// WIDGET 2 //////////////////////////////////////////

pos = JSON.parse(window.localStorage.getItem(Widget02));
if (pos) {
	placeDiv(pos.x, pos.y, Widget02);
}
document.getElementById(Widget02).innerHTML = 
	"<i>Weather</i>" +
	"<div class=\"col-sm block\">" +
	    "<script src=\"https://apps.elfsight.com/p/platform.js\"><\/script>" +
		"<div class=\"elfsight-app-6d632e6d-04d4-47ba-8e50-abe0c3aa97eb\"></div>" +
	"</div>";

//////////////////////// WIDGET 3 //////////////////////////////////////////

pos = JSON.parse(window.localStorage.getItem(Widget03));
if (pos) {
	placeDiv(pos.x, pos.y, Widget03);
}
document.getElementById(Widget03).innerHTML =
	"<i>News Block</i>" +
	"<div class=\"col-sm block\">Info</div>";

///////////////////////// FUNCTION FOR REMEMBER ////////////////////////////

function placeDiv(x_pos, y_pos, name) {
	var d = document.getElementById(name);
	d.style.webkitTransform =
		d.style.transform =
    	'translate(' + x_pos + 'px, ' + y_pos + 'px)'
	d.setAttribute('data-x', x_pos);
	d.setAttribute('data-y', y_pos);
}