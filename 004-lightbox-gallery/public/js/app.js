function expandPhoto() {
	let overlay = document.createElement('div');
	overlay.setAttribute('id', 'overlay');
	overlay.setAttribute('class', 'overlay');
	document.body.appendChild(overlay);
	let img = document.createElement('img');
	img.style.width = '30%';
	img.setAttribute('id', 'img');
	img.src = this.getAttribute('data-larger');
	img.setAttribute('class', 'overlayimg');
	img.onclick = restore;
	document.body.appendChild(img);
}

function restore() {
	document.body.removeChild(document.getElementById('overlay'));
	document.body.removeChild(document.getElementById('img'));
}

window.onload = function () {
	let imgs = document.getElementsByTagName('img');
	imgs[0].focus();
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].onclick = expandPhoto;
		imgs[i].onkeydown = expandPhoto;
	}
}