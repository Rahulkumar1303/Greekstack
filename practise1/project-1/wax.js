
gsap.from('#box1',{
    scale:0,
    x:-1000,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#box1',
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }

})
gsap.from('#box2',{
    scale:0,
    x:1000,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#box2',
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }

})
    