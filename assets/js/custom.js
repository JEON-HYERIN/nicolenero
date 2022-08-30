$(function(){
    // a태그 기본동작 방지
    $(document).on('click', 'a[href="#"]', function (e) {
      e.preventDefault();
    });

    // header
    // if($('.btn-nav').hasClass('on')){
    //   return;
    // } else {
    //   $('#gnb .gnb-item').each(function(){
    //     const length = $('#gnb .gnb-item').length;
    //     const index = $(this).index();
    //     for(i=1;i<=$('#gnb .gnb-item').length;i++) {
    //       $(this).index().css({"transform":"translateY((-17*2) + 'vh')"});
    //     }
    //   });
    // }

    const body = document.querySelector('body');
    let scrollPosition = 0;
    $('.btn-nav').click(function(){
      $('#gnb').toggleClass('open');
      $('.btn-nav').toggleClass('on');
      if($('.btn-nav').hasClass('on')) {
        // enable();
        const tl = gsap.timeline({
          defaults: {
            duration: 1
          }
        });
        tl.addLabel('t1')
        .to('.skew2', {transform: 'matrix(-0.7071067690849304,0.7071067690849304,-0.7071067690849304,-0.7071067690849304,489.8043518066406,438.3043518066406)', duration: .3}, 't1')
        .to('.skew1', {transform: 'matrix(-0.7070367932319641,-0.7071767449378967,0.7071767449378967,-0.7070367932319641,489.81671142578125,189.7080078125)', duration: .3}, 't1')
        .to('#gnb',{y:'20vh'}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item1',{y: 0},{y:0}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item2',{y: '-33.3333vh'},{y:0}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item3',{y: '-50vh'},{y:0}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item4',{y: '-66.6667vh'},{y:0}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item5',{y: '-83.3333vh'},{y:0}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item6',{y: '-100vh'},{y:0}, 't1+=.2')
      } else {
        // disable();
        const tl = gsap.timeline({
          defaults: {
            duration: 1
          }
        });
        tl.addLabel('t1')
        .to('.skew2', {transform: 'matrix(1,0,0,1,365,315)', duration: .3}, 't1')
        .to('.skew1', {transform: 'matrix(1,0,0,1,365,315)', duration: .3}, 't1')
        .fromTo('#gnb .gnb-item.item6',{y: 0},{y: '-100vh' }, 't1+=.2')
        .fromTo('#gnb .gnb-item.item5',{y: 0},{y: '-83.3333vh'}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item4',{y: 0},{y: '-66.6667vh'}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item3',{y: 0},{y: '-50vh'}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item2',{y: 0},{y: '-33.3333vh'}, 't1+=.2')
        .fromTo('#gnb .gnb-item.item1',{y: 0},{y: 0}, 't1+=.2')
        .to('#gnb',{y:'-20vh'}, 't1+=.2')
        }
      });

    // nav open
    function enable() {
      scrollPosition = window.pageYOffset;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
      body.style.width = '100%';
    }
    // nav close
    function disable() {
      body.style.removeProperty('overflow');
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    }

    // link gnb click!
    $('.link-gnb').click(function(){
      const dataMenu = $(this).parent().data('menu');
      const scrollTop = $('#' + dataMenu).offset().top;
      $('.link-gnb').removeClass('selected');
      $(this).addClass('selected');
      $('html, body').animate({scrollTop: scrollTop}, 500);
    });

    // visual
    const visualTl1 = gsap.timeline({
      defaults: {
        delay: 0.2,
        duration: 0.8
      },
      scrollTrigger:{
        trigger: '.sc-visual',
      },
    })
    visualTl1.addLabel('t1')
    .fromTo('.sc-visual .bg img',{filter: 'saturate(0%)', transform: 'scale3d(1.05, 1.05, 1)'},{filter: 'saturate(100%)', transform: 'scale3d(1, 1, 1)', duration: 1.5},'t1')
    .fromTo('.sc-visual .title',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0,},'t1+=0.8')
    .fromTo('.sc-visual .desc span',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .2},'t1+=1')
    .fromTo('.sc-visual .link-shortcut',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .1},'t1+=2.4')

    // gallery
    ScrollTrigger.saveStyles('.sc-gallery .gallery');
    ScrollTrigger.saveStyles('.sc-gallery .gallery.reverse');
    ScrollTrigger.saveStyles('.sc-gallery .obj-circle');
    ScrollTrigger.saveStyles('.sc-gallery .title');
    ScrollTrigger.matchMedia({
      "(min-width: 480px)": function(){
        const tl = gsap.timeline({
          defaults: {
            duration: .8
          },
          scrollTrigger:{
            trigger: '.sc-gallery .gallery',
            start:'-70% top',
            end: 'bottom top',
            scrub: 3,
            // end:'+=100%',
            // markers:true,
            // toggleActions: 'restart none reverse none'
          }
        })
        tl.addLabel('t1')
        .fromTo('.sc-gallery .gallery1', {y:0}, {y:-100}, 't1')
        .fromTo('.sc-gallery .gallery2', {y:0}, {y:-250}, 't1')
        .fromTo('.sc-gallery .gallery3', {y:0}, {y:-100}, 't1')
        const tl2 = gsap.timeline({
          defaults: {
            duration: .8
          },
          scrollTrigger:{
            trigger: '.sc-gallery .gallery',
            start:'-70% top',
            end: 'bottom top',
            scrub: 3,
            // end:'+=100%',
            // markers:true,
            // toggleActions: 'restart none reverse none'
          }
        })
        tl2.addLabel('t1')
        .fromTo('.sc-gallery .gallery4', {y:0}, {y:100}, 't1')
        .fromTo('.sc-gallery .gallery5', {y:0}, {y:250}, 't1')
        .fromTo('.sc-gallery .gallery6', {y:0}, {y:100}, 't1')
        // $('.sc-gallery .gallery').each(function(index, element) {
        //   const anim = gsap.to(element, {
        //     scrollTrigger: {
        //       trigger: element,
        //       endTrigger: '.sc-gallery',
        //       start: '0% 100%', 
        //       end: '+=200%',
        //       scrub: 3,
        //     },
        //     yPercent: -20,
        //     delay: (index + 1) * .5,
        //   });
        // });
        // $('.sc-gallery .gallery.reverse').each(function(index, element) {
        //   const anim = gsap.to(element, {
        //     scrollTrigger: {
        //       trigger: element,
        //       endTrigger: '.sc-gallery',
        //       start: '0% 100%', 
        //       end: '+=200%',
        //       scrub: 3,
        //     },
        //     yPercent: 20,
        //     delay: (index + 1) * .5,
        //   });
        // });
        $('.sc-gallery .obj-circle').each(function(index, element) {
          const anim = gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              endTrigger: '.sc-gallery',
              start: '0% 100%', 
              end: '100% 100%',
              scrub: 3,
              // markers: true
            },
            rotation:15,
            // delay: (index + 1) * .2,
          });
        });
        $('.sc-gallery .title').each(function(index, element){
          const anim = gsap.fromTo(element,{
            // opacity: 0,
            yPercent: -35
          }, {
            scrollTrigger: {
              trigger: element,
              start: 'top 70%',
              end: '+=100%',
              scrub: 1,
              toggleClass: {
                targets: element,
                className: 'fadein'
              }
            },
            // opacity: 1,
            yPercent: 35,
          });
        });
      },
      "(max-width: 479px)": function(){
        $('.sc-gallery .title').each(function(index, element){
          const anim = gsap.fromTo(element,{
            // opacity: 0,
            yPercent: 0
          }, {
            scrollTrigger: {
              trigger: element,
              start: 'top 70%',
              end: '+=150%',
              scrub: 3,
              toggleClass: {
                targets: element,
                className: 'fadein'
              },
              // markers: true
            },
            // opacity: 1,
            yPercent: 100,
          });
        });
      }
    });

    // plan
    gsap.fromTo('.sc-plan .title-area .ico-box', {
      // y: -165,
      y: 0
    }, {
      scrollTrigger:{
        trigger: '.sc-plan',
        start:'top top',
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
        // duration: .8
      },
      scrollTrigger:{
        trigger: '.sc-plan .headline-area-wrap',
        // start:'top top',
        // end:'+=100%',
        // markers:true,
        // toggleActions: 'restart none reverse none'
      },
    })
    titleArea1.addLabel('t1')
    .fromTo('.sc-plan .sc-title span',{yPercent: -100},{yPercent: 0, duration: .8},'t1')
    .fromTo('.sc-plan .sc-sub-title .txt-wrap span',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .2, duration: .6},'t1+=.4')

    ScrollTrigger.saveStyles('.sc-plan .plan-item .num span');
    ScrollTrigger.saveStyles('.sc-plan .plan-item .title strong');
    ScrollTrigger.saveStyles('.sc-plan .plan-item .desc span');
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function(){
        const planListTl = gsap.timeline({
          defaults: {
            duration: .8
          },
          scrollTrigger:{
            trigger: '.sc-plan .plan-item',
            start:'bottom 100%',
            // end:'+=100%',
            // markers:true,
            // toggleActions: 'restart none reverse none'
          },
        })
        planListTl.addLabel('t1')
        .fromTo('.sc-plan .plan-item .num span',{yPercent: -120, opacity: 0},{yPercent: 0,opacity: 1},'t1')
        .fromTo('.sc-plan .plan-item .title strong',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1},'t1+=.2')
        .fromTo('.sc-plan .plan-item .desc span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.4')
      },
      "(max-width: 991px)": function(){
        const planListTl1 = gsap.timeline({
          defaults: {
            duration: .8
          },
          scrollTrigger:{
            trigger: '.sc-plan .plan-item.item1',
            start:'bottom 100%',
            // end:'+=100%',
            // markers:true,
            // toggleActions: 'restart none reverse none'
          },
        })
        planListTl1.addLabel('t1')
        .fromTo('.sc-plan .plan-item.item1 .num span',{yPercent: -120, opacity: 0},{yPercent: 0,opacity: 1},'t1')
        .fromTo('.sc-plan .plan-item.item1 .title strong',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1},'t1+=.2')
        .fromTo('.sc-plan .plan-item.item1 .desc span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.4')
        const planListTl2 = gsap.timeline({
          defaults: {
            duration: .8
          },
          scrollTrigger:{
            trigger: '.sc-plan .plan-item.item2',
            start:'bottom 100%',
            // end:'+=100%',
            // markers:true,
            // toggleActions: 'restart none reverse none'
          },
        })
        planListTl2.addLabel('t1')
        .fromTo('.sc-plan .plan-item.item2 .num span',{yPercent: -120, opacity: 0},{yPercent: 0,opacity: 1},'t1')
        .fromTo('.sc-plan .plan-item.item2 .title strong',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1},'t1+=.2')
        .fromTo('.sc-plan .plan-item.item2 .desc span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.4')
        const planListTl3 = gsap.timeline({
          defaults: {
            duration: .8
          },
          scrollTrigger:{
            trigger: '.sc-plan .plan-item.item3',
            start:'bottom 100%',
            // end:'+=100%',
            // markers:true,
            // toggleActions: 'restart none reverse none'
          },
        })
        planListTl3.addLabel('t1')
        .fromTo('.sc-plan .plan-item.item3 .num span',{yPercent: -120, opacity: 0},{yPercent: 0,opacity: 1},'t1')
        .fromTo('.sc-plan .plan-item.item3 .title strong',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1},'t1+=.2')
        .fromTo('.sc-plan .plan-item.item3 .desc span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.4')
      }
    })
    
    // story
    const titleArea2 = gsap.timeline({
      defaults: {
        // duration: .8
      },
      scrollTrigger:{
        trigger: '.sc-story .story-list-wrap',
        start:'top top',
        // end:'+=100%',
        // markers:true,
        // toggleActions: 'restart none reverse none'
      },
    })
    titleArea1.addLabel('t1')
    .fromTo('.sc-story .sc-title span',{yPercent: -100},{yPercent: 0, duration: .8},'t1')
    .fromTo('.sc-story .sc-sub-title .txt-wrap span',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: .2, duration: .6},'t1+=.4')
    
    // intro
    const introTl = gsap.timeline({
      defaults: {
        duration: .8
      },
      scrollTrigger:{
        trigger: '.sc-intro .info-box-wrap',
        start:'top 70%',
        // end:'+=100%',
        // markers:true,
        // toggleActions: 'restart none reverse none'
      },
    })
    introTl.addLabel('t1')
    .fromTo('.sc-intro .title .row span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.2},'t1')
    .fromTo('.sc-intro .desc1 span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.5')
    .fromTo('.sc-intro .desc2 span',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.6')
    .fromTo('.sc-intro .link-shortcut',{yPercent: 100, opacity: 0},{yPercent: 0,opacity: 1,stagger: 0.01,},'t1+=.7')

    // contact
    const contactTl = gsap.timeline({
      defaults: {
        duration: .8
      },
      scrollTrigger:{
        trigger: '.sc-contact',
        start:'top 60%',
        // end:'+=100%',
        // markers:true,
        // toggleActions: 'restart none reverse none'
      },
    })
    contactTl.addLabel('t1')
    .fromTo('.sc-contact .title span',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0, stagger: 0.1},'t1')
    .fromTo('.sc-contact .link-contact',{opacity:0, yPercent: 100},{opacity:1, yPercent: 0},'t1+=1.4')

    // year
    const year = new Date().getFullYear();
    $('.copyright .year').text(year);

    // custom-cursor
    const mouseCursor = document.querySelector('#custom-cursor');

    window.addEventListener('mousemove', function(e){
      mouseCursor.style.left = e.clientX + 'px';
      mouseCursor.style.top = e.clientY + 'px';
      mouseCursor.style.opacity = '1';
    });

    $('.sc-contact .link-contact .circle').mouseenter(function(){
      $('#custom-cursor').css({
        'visibility': 'hidden'
      })
    });
    $('.sc-contact .link-contact .circle').mouseleave(function(){
      $('#custom-cursor').css({
        'visibility': 'visible'
      })
    });

    // $('section').each(function(el){
    //   gsap.to(el, {
    //     scrollTrigger: {
    //       trigger: el,
    //       toggleClass: {
    //         targets: el,
    //         className: 'here'
    //       }
    //     }
    //   });
    // });
});