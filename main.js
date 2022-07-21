ui.notification.show("Press E while airborne to eject");
geofs.animation.values.eject = 0
var ejected = new Boolean(0);
function checkForEjections() {
if (geofs.aircraft.instance.id == 3 || geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 18 || geofs.aircraft.instance.id == 4172 || geofs.aircraft.instance.id == 3617 || geofs.aircraft.instance.id == 2581 || geofs.aircraft.instance.id == 2857) {
if (geofs.animation.values.enginesOn == 0 && geofs.animation.values.groundContact == 0 && ejected == 0) {
console.log("eject");
setTimeout(() => {geofs.aircraft.instance.change(50);}, 2000);
ui.notification.show("You ejected from your aircraft");
audio.impl.html5.playFile("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/softtouch.mp3");
ejected = 1;
} else {
	geofs.animation.values.eject = 0
	ejected = 0
		}
   }
};
ejectionInterval = setInterval(function(){checkForEjections()}, 500);
