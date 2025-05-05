// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     repeat:-1,
//     yoyo:true,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
// })
// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
//     backgroundColor:"green",
//     borderRadius:"50%",
// })
var tl=gsap.timeline()
tl.to("#box1",{
    x:1000,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"50%"
})
tl.to("#box2",{
    x:1000,
    duration:1.5, 
    delay:1,
    rotate:360,
    borderRadius:"40%"
})
tl.to("#box3",{
    x:1000,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"30%"
})