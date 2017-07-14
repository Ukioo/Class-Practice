var box = document.getElementById('box');
bod.onclick=function(ev){
    var disX = ev.clientX-this.offsetLeft;
    var disY = ev.clientY-this.offsetTop;
    document.onmouseover=function(){
        move()
    }
}
function move(){
    var l =ev.clientX-disX;
    var t =ev.clientY-disY;
    box.style.left=l+'px';
    box.style.top=t+'px';
}
