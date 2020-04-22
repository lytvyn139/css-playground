const progress = document.getElementById('progrs');
const output = document.querySelector('[for=output]');

const speed = 1.5; 
const tmax = speed*progress.max;
let t = null;
console.log(tmax);

let init = (t = 0) =>  {
	if (t <= tmax) {
		if (t%speed === 0) output.value = progress.value = t/speed;
		requestAnimationFrame(init.bind(this, t + (Math.random() > .5)))
	}
};

init();
