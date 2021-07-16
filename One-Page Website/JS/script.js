// Open the Modal
function openModal() {
	document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides"); // The Images for the modal
	var dots = document.getElementsByClassName("demo"); // The Images for the thumbnails
	var captionText = document.getElementById("caption"); // The section that will display the caption
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", ""); // Remove the "active" class
	}
	slides[slideIndex - 1].style.display = "flex"; // Display the image
	dots[slideIndex - 1].className += " active"; // Display the thumbnails
	captionText.innerHTML = dots[slideIndex - 1].alt; // Set the caption to the "alt" text of the current image
}
