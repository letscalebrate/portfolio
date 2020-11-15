"use strict"

var bm = document.getElementsByClassName('loadAnimation');

Array.prototype.forEach.call(bm, icon => {
    // console.log(bm);
    // console.log(icon);
    var anim = bodymovin.loadAnimation({
        container: icon, 
        path: `../lottie/${icon.dataset.file}.json`,
        renderer: 'canvas',
        loop: false, 
        autoplay: true
    })
})


// let logo = document.getElementById('logo');

//     logo.addEventListener('mouseenter', () => {
//         anim.setDirection(1)
//         anim.play();
//     })
//     logo.addEventListener('mouseleave', () => {
//         anim.setDirection(-1)
//         anim.play();
//     })
// })