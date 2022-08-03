var notifiedEject = new Boolean(0)
geofs.animation.values.eject = 0
var ejected = new Boolean(1);
function checkForEjections() {
if (geofs.aircraft.instance.id == 3 || geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 18 || geofs.aircraft.instance.id == 4172 || geofs.aircraft.instance.id == 3617 || geofs.aircraft.instance.id == 2581 || geofs.aircraft.instance.id == 2857) {
if (notifiedEject == 0) {
ui.notification.show("Press E while airborne to eject");
notifiedEject = 1
};
if (geofs.animation.values.enginesOn == 0 && geofs.animation.values.groundContact == 0 && ejected == 0) {
console.log("eject");
ejected = 1
geofs.animation.values.eject = 1;
setTimeout(() => {geofs.aircraft.instance.change(50);}, 2000);
ui.notification.show("You ejected from your aircraft");
audio.impl.html5.playFile("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/softtouch.mp3");
geofs.aircraft.instance.definition.parts.forEach(function(e){
   if (e.name.includes('canopy') || e.name.includes('Canopy')) {
	   e.animations[1] = {};
      e.animations[1].type = "translate";
		e.animations[1].axis = [0, 0, 1];
      e.animations[1].value = "eject";
      e.animations[1].ratio = 100;
      e.animations[1].currentValue = null;
	};
});
//0.0986
var a = 1
var b = 0
b = b - (geofs.animation.values.aroll * 0.01)
function moveCamera() {
a = a - 0.0986
geofs.camera.translate(b, -5, a)
console.log(a)
console.log(b)
};
moveCameraInterval = setInterval(function(){moveCamera()},10)
setTimeout(() => {clearInterval(moveCameraInterval);},2000)
};
if (geofs.animation.values.enginesOn == 1 && ejected == 1) {
   ejected = 0
}
	} else {
notifiedEject = 0
geofs.animation.values.eject = 1
	}
};
ejectionInterval = setInterval(function(){checkForEjections()}, 500);
