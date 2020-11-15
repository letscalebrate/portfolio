"use strict"

$(document).ready(function () { //jquery function to move cursor circle
    var cursor = $('.cursorSquare');
    var myCursor = $('.cursorImg');

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $("div") 
        .mouseenter(function() {
            // console.log("enter");
            // let myCursor = document.querySelector(".cursorImg");
            // myCursor.classList.add("cursorBig");

            cursor.css({
                transform: "scale(2)"
            });
        })
        .mouseleave(function() {
            // let myCursor = document.querySelector(".cursorImg");
            // myCursor.classList.remove("cursorBig")

            cursor.css({
                transform: "scale(1)"
            });
});

});




    // function mouseEnter(){
    //     console.log("enter");
    //     var cursor = document.getElementsByClassName("cursorSquare");
    //     cursor.classList.add("cursorBig");
    //     }
        
    // function mouseLeave(){
    // console.log("leave");
    // var cursor = document.getElementsByClassName("cursorSquare");
    // cursor.classList.remove("cursorBig");
    // }