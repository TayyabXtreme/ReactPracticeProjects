const lenis=new Lenis()

function ref(time){
    lenis.raf(time)
    requestAnimationFrame(ref)

}

requestAnimationFrame(ref)