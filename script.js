$(document).ready(function() {
  
  $(".btn").on('click', function() {
   
    if( $("#email").val().length === 0 ) {
        $(".error").text('Whoops! It looks like you forgot to add your email').show()
        $('#email').addClass('active')
        $('.btn').addClass('btn-active')
    } else if (!$("#email").val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
       $(".error").text('Please provide a valid email address').show()
       $('#email').addClass('active')
       $('.btn').addClass('btn-active')
    } else{
      $(".error").hide()
      $("#email").val('')
      $('#email').removeClass('active')
      $('.btn').removeClass('btn-active')
    }
  })
                           
})
