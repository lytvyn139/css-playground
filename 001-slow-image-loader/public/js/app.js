const grid = document.querySelector('.grid');


const createImg = (url) => {
	const img = document.createElement('img');
	img.src = url;
	return img;
};


let i = 1;
setInterval(() => {
	if (i < 36) {
		i++;
		grid.appendChild(createImg(`./public//img/${i}.jpg`));
	}
}, 250);