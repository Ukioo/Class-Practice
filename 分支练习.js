var box =document.getElementById('box');
function move(){
    var l =ev.clientX-disX;
    var t =ev.clientY-disY;
    box.style.left=l+'px';
    box.style.top=t+'px';
}