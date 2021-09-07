   
    // preloader
    
    var preloader = document.getElementById('preloader');

    function loadingFunc(){
        preloader.style.display = 'none';
    }

    // top button

    mybutton = document.getElementById('myBtn');
    window.onscroll = function() {scrollFunc()};
    function scrollFunc() {
        if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            mybutton.style.display= "block";
        }
        else{
            mybutton.style.display= "none";
        }
    }

    function topFunction() {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
        }

    
    //     //Style Switcher
    
    // document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{ 
    // document.querySelector(".style-switcher").classList.toggle("open");
    // })

    // const links = document.querySelectorAll(".alternate-style");  
    
    // function setActiveStyle(color) {
    //     for(let i=0;i<links.length;i++) {
    //         if(color===links[i].getAttribute("title")) {
    //             links[i].removeAttribute("disabled");
    //         }
    //         else
    //         {
    //             links[i].setAttribute("disabled","true");
    //         }
    //     }
    // }


        // button

        $(document).ready(function(e){
    $('.btn').on('mouseenter',function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })

    $('.btn').on('mouseout',function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
})

    // ****** Typing Text js******

var typed = new Typed("#animate",{
    strings: [
        "Developer",
        "Freelancer",
        "Designer",
        "Innovator"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});


//progress bar

$('.skills').waypoint(function () {
    $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 1500,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });

}, {offset: '80%'});
    