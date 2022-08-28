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
    const visualTl1 = gsap.timeline({
      defaults: {
        delay: 0.2,
        duration: 1.25
      },
      scrollTrigger:{
        trigger: '.sc-visual',
      },
    })
    visualTl1.addLabel('t1')
    .fromTo('.sc-visual .bg img',{filter: 'saturate(0%)', transform: 'scale3d(1.05, 1.05, 1)'},{filter: 'saturate(100%)', transform: 'scale3d(1, 1, 1)'},'t1')
    .fromTo('.sc-visual .title',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0,},'t1+=0.8')
    .fromTo('.sc-visual .desc span',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .2},'t1+=1')
    .fromTo('.sc-visual .link-shortcut',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .2, delay: 1},'t1+=1.4')

    // gallery
    $('.sc-gallery .title').each(function(index, element){
      const anim = gsap.fromTo(element,{
        // opacity: 0,
        yPercent: 0
      }, {
        scrollTrigger: {
          trigger: element,
          start: 'top 50%',
          end: '+=80%',
          scrub: 3,
          toggleClass: {
            targets: element,
            className: 'fadein'
          }
        },
        // opacity: 1,
        yPercent: 30,
      });
    });

    $('.sc-gallery .gallery img').each(function(index, element) {
      const anim = gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          endTrigger: '.sc-gallery',
          start: '0% 100%', 
          end: '+=200%',
          scrub: 3,
        },
        yPercent: 30,
        delay: (index + 1) * .2,
      });
    });
    $('.sc-gallery .gallery.reverse img').each(function(index, element) {
      const anim = gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          endTrigger: '.sc-gallery',
          start: '0% 100%', 
          end: '+=200%',
          scrub: 3,
        },
        yPercent: -30,
        delay: (index + 1) * .2,
      });
    });
    $('.sc-gallery .obj-circle img').each(function(index, element) {
      const anim = gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          endTrigger: '.sc-gallery',
          start: '0% 100%', 
          end: '+=200%',
          scrub: 3,
        },
        yPercent: 10,
        delay: (index + 1) * .2,
      });
    });
    
    // plan


    gsap.fromTo('.sc-plan .title-area .ico-box', {
      y: -165,
    }, {
      scrollTrigger:{
        trigger: '.sc-plan',
        start:'-30% top',
        end:'+=50%',
        // markers:true,
        scrub: 2,
        // onEnterBack: function(){
        //   $('.sc-plan .title-area .ico-arrow-down').toggleClass('fadeout');
        // },
        // onLeave: function(){
        //   $('.sc-plan .title-area .ico-arrow-down').toggleClass('fadeout');
        // },
        // onLeaveBack: function(){
        //   $('.sc-plan .title-area .ico-arrow-down').toggleClass('fadeout');
        // },
      },
      y: 165,
      duration: 1.5
    })

    const titleArea1 = gsap.timeline({
      defaults: {
        duration: .8
      },
      scrollTrigger:{
        trigger: '.sc-plan',
        start:'-30% top',
        end:'+=50%',
        // markers:true,
        toggleActions: 'restart none reverse none'
      },
    })
    titleArea1.addLabel('t1')
    .fromTo('.sc-plan .sc-title span',{yPercent: -100},{yPercent: 0},'t1')
    .fromTo('.sc-plan .sc-sub-title span',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .2},'t1+=.4')
    
    const planListTl = gsap.timeline({
      defaults: {
        duration: .8
      },
      scrollTrigger:{
        trigger: '.sc-plan .plan-item',
        start:'top center',
        // markers:true,
        toggleActions: 'restart none reverse none'
      },
    })
    planListTl.addLabel('t1')
    .fromTo('.sc-plan .plan-item .num',{yPercent: -120, opacity: 0},{yPercent: 0,opacity: 1},'t1')
    .fromTo('.sc-plan .plan-item .title',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1},'t1')
    .fromTo('.sc-plan .plan-item .desc span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.05},'t1')
});