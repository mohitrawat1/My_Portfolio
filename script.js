var icon = document.querySelector("nav i");
var close = document.querySelector(".menu i")
//====================================== Cursor ==========================
var cursor = document.querySelector(".cursor");
var main = document.querySelector("body");
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.2,
        ease: "power4.out"
    })
})
// var allAnc  = document.querySelectorAll("a");
// allAnc.forEach(function(e){
//     e.addEventListener("mouseenter", function () {
//         var text = e.textContent;
//         cursor.innerHTML = `<span>${text}</span>`
//         gsap.to(cursor, {
//             scale: 3,
//             duration: 1,
//             ease: "power2.out"
//         })

//     })
//     e.addEventListener("mouseleave",function(){
//         cursor.innerHTML = "";
//         gsap.to(cursor, {
//             scale: 1,
//             duration: 1,
//             ease: "power2.out"
//         });
//     })
// })


// ======================= intro =============================

// function split(){
//     var dev = document.querySelector(".dev");
//     var dev1 = dev.textContent;
//     var devA = dev1.split("");
//     var clutter = "";
//     devA.forEach(function(e){
//         clutter += `<span class="a">${e}</span>`
//     });
//     dev.innerHTML = clutter;
// }

function splitAll() {
    var dev = document.querySelectorAll(".dev");
    dev.forEach(function (e) {
        var dev1 = e.textContent;
        var devA = dev1.split("");
        var clutter = "";
        devA.forEach(function (el) {
            clutter += `<span class="a">${el}</span>`
        });
        e.innerHTML = clutter;
    })
}
splitAll();
//============================ GSAP ===========================

// =========================== NAV ===========================
var tl = gsap.timeline({ paused: true });

tl.to(".menu", {
    right: 0,
    duration: 0.3,
    ease: "power4.out"
});
tl.to(".menu a", {
    x: 0,
    opacity: 1,
    duration: 0.3,
    stagger: 0.2,
    ease: "power4.out"
}, "-=0.2");
tl.to(".menu i", {
    opacity: 1,
    duration: 0.3,
    ease: "power4.out"
}, "-=0.3");

icon.addEventListener("click", function () {
    tl.play();
});

close.addEventListener("click", function () {
    tl.reverse();
});


// ============================== intro =======================
gsap.from(".intro .left h1 span", {
    opacity: 0,
    duration: 0.4,
    repeat: -1,
    yoyo: true,
    ease: "power4.out"
})
gsap.from(".a", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    stagger: 0.1,
    repeat: -1
})
// ============================== exp ========================
gsap.registerPlugin(ScrollTrigger);

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".exp",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
    }
});

tl2.from(".exp .card.lt", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "power4.out"
}, 0);

tl2.from(".exp .card.rt", {
    x: 200,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
}, 0);

// ============================ Projects ============================
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2,
    }
});

tl3.from(".projects .cards.lt", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "power4.out"
}, 0);

tl3.from(".projects .cards.rt", {
    x: 200,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
}, 0);
// =============================== guitar ================================

var path = 'M 10 100 Q 500 100 990 100';
var finalPath = 'M 10 100 Q 500 100 990 100';

var string = document.querySelector(".string");
string.addEventListener("mousemove", function (e) {
    path = `M 10 100 Q ${e.x} ${e.y} 990 100`;
    gsap.to("svg path", {
        attr: {
            d: path
        },
        duration: 0.3,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 2,
        ease: "elastic.out(1,0.2)"
    })
})
// =============================== Footer ================================
gsap.from(".footer-content", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 35,
    duration: 1,
    ease: "power4.out"
});
