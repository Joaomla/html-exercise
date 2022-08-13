var image_id = 0;
function setImage()
{
    var seconds = new Date().getSeconds();
    document.getElementById("image").src="assets/images/main/main" + image_id + ".png";
    image_id = ++image_id > 8 ? 0 : image_id;
}

setImage();
setInterval(setImage, 5000)