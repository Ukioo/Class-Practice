var box = document.getElementById('box');
box.onmousedown=function(ev){
    var disX = ev.clientX-this.getBoundingClientRect().left;
    var disY = ev.clientY-this.getBoundingClientRect().top;
    document.onmousemove=function(ev){
       var l =ev.clientX-disX;
        var t =ev.clientY-disY;
        box.style.left=l+'px';
        box.style.top=t+'px';
    }
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}

