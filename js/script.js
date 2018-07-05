var modal = document.getElementById('myModal');
var modalImg = document.getElementById("imagenMostrar");
var captionText = document.getElementById("caption");

var img = [];
var span = [];

for(var i=0; i < 6; i++){
	img[i] = document.getElementsByClassName("portfolio-image")[i];
	img[i].addEventListener("click", imageModal);
}

for (var i = 0; i < 6; i++){
	span[i]= document.getElementsByClassName("close")[0];
	span[i].addEventListener("click", closeModal);
}

function imageModal(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerText = this.alt;
}

function closeModal() {
	modal.style.display = "none";
}