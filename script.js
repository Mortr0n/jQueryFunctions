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
                //the above was kind of a funny accident. 
                //left it in because it made me laugh.
                //you said to have fun!
            })
        })
    })

    $('#hideButton').click(function(){
        $('#pHide').hide("slow");

    })

    $('#hideButton').click(function(){
        $('#slideDown').slideDown("slow", function(){
            $('#slideDown').html("<p>Look it slid down.  Even though it looks like it went up</p>");
        })
    })

    $('#beforeButton').click(function(){
        $('.addGreen').before('<h1>This is what before does</h1>');
        
    })

    $('#afterButton').click(function(){
        $('#appendP').after('<h2>This is done after the append paragraph</h2>');
    })

    $('#attrButton').click(function(){
        var source = $('#misty').attr('src');
        $('#misDiv').text("This pictures source is " + source);
    })

    $('#slideUp').click(function(){
        $('#hSlide').slideUp( "slow", function(){

        })
    })

    $('#tButton').click(function(){
        $("#japan").toggle("slow", function(){
        });
        $(".toggle").toggle("slow", function(){

        })
    });

    function displayChoice(){
        var myChoice = $('#singleSelect').val();
        
        $('#selected').text('Your choice was ' + myChoice);
    }

    $('select').change(displayChoice);
    displayChoice();


})
