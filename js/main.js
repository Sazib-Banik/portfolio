var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// form section
const submit_btn = document.getElementById("submit_massage");
submit_btn.addEventListener("click", function(){
    const getfNameValue = document.getElementById("fName").value;
    const getlNameValue = document.getElementById("lName").value;
    const getEmailValue = document.getElementById("email").value;
    const getPhoneValue = document.getElementById("phone").value;
    const getMessageValue = document.getElementById("message").value;

    // const fullName = getfNameValue + " " + getlNameValue;
    // console.log(fullName);
    

    if(getfNameValue && getlNameValue && getEmailValue && getPhoneValue && getMessageValue){
        const fullName = getfNameValue + " " + getlNameValue;
        var templateParams = {
          fullName: fullName,
          getEmailValue: getEmailValue,
          getPhoneValue: getPhoneValue,
          getMessageValue: getMessageValue,
        };
        //console.log(fullName, getEmailValue, getPhoneValue, getMessageValue);
        emailjs.send(
          "service_portfolio",
          "template_cjrhqw3",
          templateParams,
          "xWge5c0RcxQsvGhf4"
        );
    }
})












