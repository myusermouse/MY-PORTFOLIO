let toogleBtn = document.getElementById('toggle'),
    nightImg = document.getElementById('night-img'),
    body = document.getElementById('body');
   

toogleBtn.onclick = function() {
    body.classList.toggle('dark-mode');
    nightImg.src = "/icon/light.png";
    nightImg.style.paddingLeft = "3px"
}