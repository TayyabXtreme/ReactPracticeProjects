gsap.from('#page1 #box',{
    scale:0,
    rotate:360,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:'#page1 #box',
        scroller:'body',
        // markers:true,
        start:"top 55%",
        end:"top 30%",
        scrub:2
    }
}) 

gsap.from('#page2 #box',{
    scale:0,
    rotate:360,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:'#page2 #box',
        scroller:'body',
        // markers:true,
        start:"top 55%",
        end:"top 30%",
        scrub:2
    }
}) 

gsap.from('#page3 #box',{
    scale:0,
    rotate:360,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:'#page3 #box',
        scroller:'body',
        // markers:true,
        start:"top 55%",
        end:"top 30%",
        scrub:2
    }


}) 

