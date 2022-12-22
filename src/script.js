let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

tl.to('h1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 , duration: 2} )
.to('.description-header', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, x: 0 , duration: 2}, '-=1.7' )
.to('.header-button',  {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, x: 0 , duration: 2}, '-=1.9' )
.to('.header-pc', {'clip-path': 'circle(100% at 50% 50%)', scale: 1,  duration: 2.5, ease: 'expo.out'}, '-=0.8' )