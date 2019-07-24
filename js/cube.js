let lastMouth;
let degX = 0;
let degY = 0;
let degZ = 0;
let quaterX = 0;
let quaterY = 0;
let quaterZ = 0;


function cubeRotate() {
	document.getElementById('cube').style.transform = "translateZ( -100px) rotateX("+degX+"deg) rotateY( "+degY+"deg) rotateZ("+degZ +"deg)";
}



document.addEventListener("DOMContentLoaded", ()=>{
	document.addEventListener("mousedown",(ev)=>{
		lastMouth = [ev.pageX,ev.pageY];
		document.addEventListener("mousemove", paramCalc);
	})
	
	document.addEventListener("mouseup",()=>{
		document.removeEventListener("mousemove", paramCalc);
	})

});


function paramCalc(ev) {
	quaterX = quaterFound(degX);
	quaterY = quaterFound(degY);
	quaterZ = quaterFound(degZ);
	

	let ratioXd = {
		Y:0,
		Z:0
	}
	let ratioYd ={
		X:0,
		Z:0
	}
	let ratioZd = {
		X:0,
		Y:0
	}


	let ratioX = 0;//////////////////
	let ratioZ = 0;

	ratioYd=ratioFound(quaterY,ratioYd);



	degY += 360*((ev.pageX-lastMouth[0])/document.documentElement.clientWidth);

	degX -= ratioYd.X*360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight);

	degZ -= ratioYd.Z*360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight);

	lastMouth = [ev.pageX,ev.pageY];
	
	cubeRotate();

}


function quaterFound(angle) {
	return ((angle%360)+360)%360;
}
function ratioFound(angle,obj) {

	if(angle >= 0 && angle < 90)
		{
			obj.Z = (1/90)*angle;
			obj.X = 1-obj.Z;
		}
	if(angle >= 90 && angle < 180)
		{
			obj.Z = (1/90)*(180-angle);
			obj.X = (1-obj.Z);
		}
	if(angle >= 180 && angle < 270)
		{
			obj.Z =  -(1/90)*(angle-180);
			obj.X = (1+obj.Z);
		}
	if(angle >= 270 && angle < 360)
		{
			obj.Z = -(1/90)*(360-angle);
			obj.X = (1+obj.Z);
		}

		return obj
}