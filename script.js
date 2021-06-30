$(document).ready(function(){
    $('#classButton').click(function(){
        $('.addGreen').addClass('green');
    })

    $('#toggleButton').click(function(){
        $('#odin').slideToggle( "slow", function(){

        })
    })

    $('#appendButton').click(function(){
        $('#appendP').append('<h1>I have appended text now!</h1>');
    })

})
