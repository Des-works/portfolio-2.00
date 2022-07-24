
$(window).scroll(() => {
  // sticky navbar on scroll script
  if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
  }else{
      $('.navbar').removeClass("sticky");
  }
  
  // scroll-up button show/hide script
  if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  
  // AOS Instance
  AOS.init();
  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });
  $('.navbar .menu li a').click(() => {
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });


  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });


  // typing text animation script
  var typed = new Typed(".typing", {
      strings: [ "Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-2", {
      strings: [ "Developer", "Freelancer",  "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  
  // flitter
    $('.portfolio .button-container .btn').click(function() { 
      let filter = $(this).attr('data-filter'); 
      if(filter == 'all'){
        $('.portfolio .image-container .box-2').show('400')
      }else{
        $('.portfolio .image-container .box-2').not('.'+filter).hide('200');
        $('.portfolio .image-container .box-2').filter('.'+filter).show('400');
      } 
      });

    

    // contact style
    const inputs = document.querySelectorAll(".input");

    function focusFunc()  {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
