function createCard() {
	// Get the name input value
	var name = document.getElementById("name-input").value;

	// Get the card image
	var cardImage = document.querySelector(".card img");

	// Create a canvas element
	var canvas = document.createElement("canvas");

	// Set the canvas width and height to match the card image
	canvas.width = cardImage.width;
	canvas.height = cardImage.height;

	// Get the canvas context
	var context = canvas.getContext("2d");

	// Draw the card image on the canvas
	context.drawImage(cardImage, 0, 0);

	// Set the font properties
	context.font = "bold 48px Arial";
	context.textAlign = "center";
	context.fillStyle = "white";

	// Draw the name on the canvas
	context.fillText(name, canvas.width / 2, canvas.height / 2);

	// Set the card image source to the canvas data URL
	cardImage.src = canvas.toDataURL();
}

function saveCard() {
	// Get the card image source
	var cardImageSrc = document.querySelector(".card img").src;

	// Create a link element and set its download attribute
	var link = document.createElement("a");
	link.download = "greeting-card.png";

	// Set the link href to the card image source
	link.href = cardImageSrc;

	// Click the link to download the card image
	link.click();
}