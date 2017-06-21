$(function(){
   /*$(".element").typed({
       stringsElement:document.getElementsByClassName("typed-strings"),
        typeSpeed:0}
   )*/
    $("#typed").typed({
        strings:["Hey! ^2000 <br> Full stack is my thing. ^1000 <br> I have  experience building <br> fast engaging web applications."],
        typeSpeed: 20,
        contentType: 'html',
        startDelay: 500,
        backSpeed:500
    });

});
