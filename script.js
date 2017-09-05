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
    ctx.clearRect(0, 0, textCanvas.width, textCanvas.height);
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
    ctx.clearRect(0, 0, profileCanvas.width, profileCanvas.height);
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      img.style.display = 'none';
      mapProfileOnText();
    };
}

var tctx;
var pctx;
var textData;
var profileData;
function mapProfileOnText(){
    tctx = textCanvas.getContext('2d');
    pctx = profileCanvas.getContext('2d');

    var textImageData = tctx.getImageData(0, 0, textCanvas.width, textCanvas.height);
    textData = textImageData.data; //rgba data of image
    
    var profileImageData = pctx.getImageData(0, 0, profileCanvas.width, profileCanvas.height);
    profileData = profileImageData.data; //rgba data of image
    
    
    var index = 100*100;
    
    while(index<textData.length){
      if(textData[index]<250 || textData[index+1]<250 || textData[index+2]<250){
        //if(profileData[index]<250 && profileData[index+1]<250 && profileData[index+2]<250)
        {
          textData[index] = profileData[index];
          textData[index+1] = profileData[index+1];
          textData[index+2] = profileData[index+2];  
        }
        
      }
      index += 4; // skip the alpha pixel
    }
    
    tctx.putImageData(textImageData,0,0);
    

}
