/////////////////////// SET UP /////////////////////////////////////////

var script= document.createElement('script');
   		script.type= 'text/javascript';
        script.src= 'https://apps.elfsight.com/p/platform.js';
		document.body.appendChild(script);
let Widget01 = "CoronaVirus";
let Widget02 = "Weather";
let Widget03 = "Calculator"
let Widget04 = "Currency index"
let Widget05 = "Calendar"

/////////////////////// WIDGET 1 ///////////////////////////////////////	
	
let pos = JSON.parse(window.localStorage.getItem(Widget01));
if (pos) {
	placeDiv(pos.x, pos.y, Widget01);
}
document.getElementById(Widget01).innerHTML = 
	"<i>Coronavirus Statistics</i>" +
	"<div class=\"col-sm block\" id=\"cstats\">" +
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
	"<i>Calculator</i>" +
	"<div class=\"col-sm block\"  id=\"calculator\">" +
		"<iframe width=\"219\" height=\"302\" src=\"http://calculator-1.com/outdoor/?f=ffffff&r=666666\" scrolling=\"no\" frameborder=\"0\"><\/iframe>" +
	"</div>";
	
//////////////////////// WIDGET 4 //////////////////////////////////////////

pos = JSON.parse(window.localStorage.getItem(Widget04));
if (pos) {
	placeDiv(pos.x, pos.y, Widget04);
}
document.getElementById(Widget04).innerHTML =
	"<i>Currency Indicies</i>" +
	"<div class=\"col-sm block\">" +
		"<iframe style=\"width:100%;border:0;overflow:hidden;background-color:transparent;height:192px\" scrolling=\"no\" src=\"https://fortrader.org/en/informers/getInformer?st=30&cat=7&title=The%20Bank%20of%20Russia%20Exchange%20Rates%20&texts=%7B%22toolTitle%22%3A%22Symbol%22%2C%22todayCourse%22%3A%22RUB%22%7D&mult=1&showGetBtn=0&hideHeader=0&hideDate=0&w=0&codes=1&colors=false&items=2%2C21&columns=&toCur=11111\"><\/iframe>" +
	"</div>";
	
//////////////////////// WIDGET 5 //////////////////////////////////////////

	pos = JSON.parse(window.localStorage.getItem(Widget05));
if (pos) {
	placeDiv(pos.x, pos.y, Widget05);
}
document.getElementById(Widget05).innerHTML =
	"<i>Calendar</i>" +
	"<div class=\"col-sm block\">" +
		"<div id=\"calendar\">" +
			"<div id=\"calendar_header\">"+
			"<i class=\"icon-chevron-left\"></i><h1></h1><i class=\"icon-chevron-right\"></i></div>" +
			"<div id=\"calendar_weekdays\"></div>" +
			"<div id=\"calendar_content\"></div>" +
		"</div>" +
	"</div>";
///////////////////////// FUNCTION FOR REMEMBER ////////////////////////////

function placeDiv(x_pos, y_pos, name) {
	var d = document.getElementById(name);
	d.style.webkitTransform =
		d.style.transform =
    	'translate(' + x_pos + 'px, ' + y_pos + 'px)'
	d.setAttribute('data-x', x_pos);
	d.setAttribute('data-y', y_pos);
}