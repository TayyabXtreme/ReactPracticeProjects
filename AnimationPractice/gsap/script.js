var tl=gsap.timeline()

gsap.to('#box',{
    x:1300,
    duration: 2,
    delay:3,
    backgroundColor: 'blue',
    rotate:360,
    scale: 1.5,
    borderRadius: '50%',
})


gsap.from('h1',{
    y:50,
    duration: 2,
    opacity:0,
    delay:1,
    stagger:1
})

tl.to('#box1',{
    x:1000,
    duration:3,
    delay:1,
    
})

tl.to('#box2',{
    x:1200,
    duration:3,
    rotate: 360,
  
    
})

tl.to('#box3',{
    x:800,
    duration:3,
   

    
})