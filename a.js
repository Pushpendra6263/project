gsap.registerPlugin();
var tl = gsap.timeline({
    repeat :-1,
})
tl
.to("#b1h3-div h3",{
    duration : 2,
    top : 0,
    stagger : 2,
    ease : Expo.easeInOut
},'same')
.to("#b1h3-div h3",{
    delay : 2,
    top : "-100%",
    stagger : 2,
    ease : Expo.easeInOut
},'same')


.to("#b2 .b2-class",{
        duration : 2,
        left : 0,
        stagger : 2,
        ease : Expo.easeInOut
},'same')


.to("#b3 .b3-class",{
    duration : 2,
    top : 0,
    stagger : 2,
     ease : Expo.easeInOut
},'same')


.to("#b3 .b3p2-class",{
    duration : 2,
    left : 0,
    stagger : 2,
    ease : Expo.easeInOut
},'same')


.to("#last-div .last",{
    duration : 2,
    top : 0,
    stagger : 2,
    ease : Expo.easeInOut
},'same')
.to("#last-div .last",{
    delay : 2,
    top : "-100%",
    stagger : 2,
    ease : Expo.easeInOut
},'same')


.to("#dots .dot",{
    duration : 1.5,
    stagger : 1.5,
    ease : Expo.easeInOut,
    backgroundColor : "Red"
},'same')
.to("#dots .dot",{
    delay : 2.5,
    stagger : 2.5,
    ease : Expo.easeInOut,
    backgroundColor : " rgba(255, 255, 255, 0.472)"
},'same')


.to("#nav .circle",{
    duration : 1,
    stagger : 2,
    ease : Expo.easeInOut,
    backgroundColor : "Red"
},'same')

.to("#bottom1 h1",{
    duration : 2,
    top : 0,
    stagger : 2,
    ease : Expo.easeInOut
},'same')
.to("#bottom1 h1",{
    delay : 2,
    top : "-100%",
    stagger : 2,
    ease : Expo.easeInOut
},'same')

.to(".top-pic",{
    duration : 2,
    left : 0,
    stagger : 2,
    ease : Expo.easeInOut
},'same')

