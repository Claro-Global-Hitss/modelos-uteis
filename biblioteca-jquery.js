// Instanciar biblioteca Jquery
var s = document.createElement("script");
s.src = "https://code.jquery.com/jquery-3.6.0.min.js";
s.onload = function(e){ 
    $('body').css('display', 'none')
}; 
document.head.appendChild(s);