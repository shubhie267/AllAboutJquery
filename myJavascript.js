$(document).ready(function () {
    // this means when your whole document is ready only then jquery will run
    // not before that and whole code comes in between these braces



    console.log("Hi Buddy");
    // // $('p').click(function(){  
    // //  Iss cheez ka matlab he that when you will click on p i.e. paragraph
    // // the content in function will run or get executed
    // //  aur $ ka matlab he ki jquery , jquery likho ya dollar ek hi baat he
    // // })
    // $('p').click()  // syntax - $('selector').action()
    // $('p').click(function () {
    //     console.log("you clicked on p", this) // jo click kia usey print kero
    //     $('p').hide();  // this will hide p when you click it but will erase all the p's
    //     $(this).hide();     // this will hide only that p , which we will click 1 by 1

    // });


    // There are 3 main types of selectors in jquery - 
    // 1. element selector ---- // $('p').hide();  examples
    // 2. id selector ---- // $('#second').hide(); 
    // 3. class selector ---- // $('.a').hide();

    // ---------------------------------------------------------------------------------


    // Events in JQuery :
    // Mouse events - click, dblclick, mouseenter, mouseleave
    // Keyboard events - keypress, keydown
    // form events - submit, change, focus, blur
    // window/document events - load, resize, scroll, unload


    // $('p').dblclick(function(){
    //     console.log('Good morning');
    // })

    // // $('p').mouseenter(function(){           // whatever p's are there just hover on them and it will know
    // //     console.log('Good mouse enter', this); // this means it will print too
    // // })

    // $('p').keypress(function(){
    //     console.log('Good keypressed done');
    // })


    // $('p').on({    // multiple event handlers 
    //     click: function () {
    //         console.log('hi shubhi', this)
    //     },

    //     mouseleave: function () {
    //         console.log('Bye shubhi'); // jese mouse hatega text per se 
    //     }
    // });

    // $('#bigpara').hide(2000) // there is a div tag in html page - it is a big paragraph it hides in 2000 seconds.

    // $('#bigpara').hide(2000, function(){
    //     console.log("hidden")
    // })      // this has callback function - after text hides it writes hidden
    // ****************** MAGICAL ************************

    // $('#button').click(function () {
    //     // $('#bigpara').toggle(1000);
    //     // $('#bigpara').slideToggle(1000);
    //     // $('#bigpara').fadeOut(1000);
    //     // $('#bigpara').fadeTo(1000);
    // });  
    // // more functions - fadeIn, fadeOut, fadeToggle, fadeTo
    // // slideUp, slideDown, slideToggle
    // $('#bigpara').slideToggle(1000, function (){ //(speed, callback) these are optional

    // });


    // ***********************************

    // ANIMATE FUNCTION IN JQUERY
    $('#button').click(function () {
        $('#bigpara').animate({opacity : 0.3}, 4000);
        $('#bigpara').animate({opacity : 0.9}, 4000);
        $('#bigpara').animate({width : '350px'}, 1000);


    })



});




