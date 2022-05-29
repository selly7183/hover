$(document).ready(function(){
    const items = document.querySelectorAll('.item')

    items.forEach((el) => {
    const image = el.querySelector('img')
    
    el.addEventListener('mouseenter', (e) => {
        gsap.to(image, { autoAlpha: 1, scale:1.3});
    })
    
    el.addEventListener('mouseleave', (e) => {
        gsap.to(image, { autoAlpha: 0, scale:1  })
    })
    
    // el.addEventListener('mousemove', (e) => {
    //     gsap.set(image, { x: e.offsetX - 5 })
    // })
    })
});

