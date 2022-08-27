$(function(){
    // a태그 기본동작 방지
    $(document).on('click', 'a[href="#"]', function (e) {
      e.preventDefault();
    });

    $('.btn-nav').click(function(){
      $('#gnb').toggleClass('open');
      
      if($('#gnb').hasClass('open')) {

        const tl = gsap.timeline({});
        tl.addLabel('t1')
        .to('#gnb',{y: '20vh', scale: 1, transformStyle: 'preserve-3d'}, 't1')
        .to('#gnb .link-gnb',{y: 0, scale: 1, transformStyle: 'preserve-3d',stagger: .2}, 't1+=.2')
      } else {
          //   gsap.to('#gnb .link-gnb',{
          //   y: '-33.3333vh',
          //   stagger: .2
          // });
          const tl = gsap.timeline({});
          tl.addLabel('t1')
          // .to('#gnb .link-gnb',{y: '-33.3333vh',stagger: .2}, 't1')
          .to('#gnb',{y: '-20vh'}, 't1')
      }
    });
    // visual
    // gsap.to('.sc-visual',1.5, {
    //   scrollTrigger: {
    //     trigger: '.sc-visual',
    //     endTrigger:'.sc-gallery',
    //     start: 'top top',
    //     scrub: 1,
    //   },
    //   transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1320, 0, 1)',
    // });
});