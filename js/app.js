document.addEventListener('DOMContentLoaded', function() {

  //MATERIALIZE.CSS INITS

  var slider = document.querySelectorAll('.slider');
  var mySlider = M.Slider.init(slider, { indicators: false });

  var sidenav = document.querySelectorAll('.sidenav');
  var mySidenav = M.Sidenav.init(sidenav);

  var scrollspy = document.querySelectorAll('.scrollspy');
  var myScroll = M.ScrollSpy.init(scrollspy, { scrollOffset: 0 });

  var fab = document.querySelectorAll('.fixed-action-btn');
  var myFab = M.FloatingActionButton.init(fab)

  //NAVBAR SCROLL CHANGE

  // let scrolling = false;
  // const tg = document.querySelector('html');

  // setInterval( function() {
  //   if ( scrolling ) {
  //     scrolling = false;
  //     let nav = document.querySelector('.nav-wrapper');
  //     let trigger = document.querySelector('.sidenav-trigger');
  //     if(tg.scrollTop > 200){
  //       nav.classList.add('show-bg');
  //       nav.classList.add('z-depth-1');
  //     } else if(tg.scrollTop < 200){
  //       nav.classList.remove('show-bg');
  //       nav.classList.remove('z-depth-1');
  //     }
  //   }
  // }, 250 );

  // document.addEventListener('scroll', function() {
  //   scrolling = true;
  // })

  //IMAGE BOX

  let photos = document.querySelector('.photos');
  let body = document.querySelector('body');

  //LISTEN TO PHOTOS CLICKS
  photos.addEventListener('click', (e) => {
    if(e.target.matches('.photo')){
      //CREATE LIGHTBOX DIV AND SET UP CLASSES AND ATTRIBUTES
      let big = document.createElement('DIV');
      let inner = document.createElement('IMG');
      let split = e.target.style.backgroundImage.split('(');
      let len = split.length;
      let src = split[len-1].replace(')','').replace(/"/g,'');
      
      inner.classList.add('cont');
      inner.src = src;
      big.appendChild(inner);
      big.classList.add('big', 'show');

      //LISTEN TO ANIMATIONS END TO DELETE ELEMENT AFTER
      big.addEventListener('animationend', (event) => {
        if(event.animationName === "fadeout"){
          big.remove();
        }
      })

      //LISTEN TO ELEMENT CLICKS TO ANIMATE
      big.addEventListener('click', () => {
        big.classList.add('out');
      })
      
      body.appendChild(big);
    }
  });

});

//Toast after contact sent
document.addEventListener("DOMContentLoaded", function(event) { 
  var control = location.search;
  var urlParams = new URLSearchParams(control);
  if(urlParams.get('s')){
    M.toast({
      html: 'Mensaje enviado!',
      classes: 'orange'
      })
  }
});