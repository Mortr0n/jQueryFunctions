$(document).ready(function(){
    $('#classButton').click(function(){
        $('.addGreen').addClass('green');
    })

    $('#toggleButton').click(function(){
        $('#odin').slideToggle( "slow", function(){
            //my dog and best friend Odin
            $('#odin').fadeIn("slow", function(){
                //now you can't get rid of it!

            })
        })
    })

    $('#appendButton').click(function(){
        $('#appendP').append('<h1>I have appended text now!</h1>');
    })


    $('#showButton').click(function(){
        $('#misty').show("slow", function(){
            $('#misty').fadeOut("slow", function(){
                //
                
                //the above was kind of a funny accident. 
                //left it in because it made me laugh.
                //you said to have fun!
            })
        })
    })
})
