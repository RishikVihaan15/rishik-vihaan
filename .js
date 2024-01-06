<script src="C:\Users\Rishik vihaan\Downloads\jquery-3.7.1.min.js">

    $(document).ready(function(){

$('#menu').click(function(){
  $(this).toggleClass('fa-times');
  $('header').toggleClass('toggle');
});

$(window).on('scroll load',function(){

  $('#menu').removeClass('fa-times');
  $('header').removeClass('toggle');

  if($(window).scrollTop() > 0){
    $('.top').show();
  }else{
    $('.top').hide();
  }

});



$('a[href*="#"]').on('click',function(e){

  e.preventDefault();

  $('html, body').animate({

    scrollTop : $($(this).attr('href')).offset().top,

  },
    500, 
    'linear'
  );

});

});


    function validateForm() {
    
    var name = document.getElementById("name").value;

    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

   
    var email = document.getElementById("email").value;

   
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   
    if (!email.match(pattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    
    return true;
}


    
document.getElementById("sendButton").addEventListener("click", function() {
    alert("Done, info sent");
});


    window.onload = function() {
    document.getElementById("loadingScreen").style.display = "none";
};
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault()
  document.getElementById("response").innerHTML = "Your responses have been submitted!";
});
</script>