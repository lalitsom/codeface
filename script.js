var ok ='';
var textCanvas = document.getElementById('textCanvas');
var profileCanvas = document.getElementById('profileCanvas');

function createTextface(){
  loadTextImg();

  // showImage();
}


function loadTextImg(){
    var img = new Image();
    img.src = document.getElementById('text-url-input').value
    var ctx = textCanvas.getContext('2d');
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      img.style.display = 'none';
      loadProfileImg();
    };

}


function loadProfileImg(){
    var img = new Image();
    img.src = document.getElementById('profile-url-input').value
    var ctx = profileCanvas.getContext('2d');
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      img.style.display = 'none';
      mapProfileOnText();
    };
}

var tctx;
var pctx;
function mapProfileOnText(){
    tctx = textCanvas.getContext('2d');
    pctx = profileCanvas.getContext('2d');
}
