$(document).ready(function()
{
    $("button").click(function()
    {
        $("div").stop(600)
    });
});

/*




-----hrakat mouse  events -----
click
dblclick
mouseenter
mouseleave
hover
hover(function(){ } , function(){ });


----------effects----------
show
hide
toggle
fadeIn
fadeOut
fadeTo
slideToggle
slideDown
animate     $("div").animate({width:"500px" , height:"400px"});
animate ({ css proporites} , speed , callbakc function)
stop('clearQueue'=true=all will stop , 'goToEnd'=true)


----------------------------------------------------

append
prepend
appendTo
remove = contains
*/




/*
///////////////////////////////////////////////////////

$ ANIMATE$ 

$(document).ready(function()
{
    $("div").animate({left:"100px" });
    $("div").animate({width:"50%" });
    $("div").animate({height:"400px" , opacity:0.5 });
});


////////////////////////////////////////////////////////////
$ Toggle $

$(document).ready(function()
{
    $(".uniq").click(function()
    {
        $(".spans").toggle();
    });

    $(".phos").click(function()
    {
        $(".un").toggle();
    });
});


//////////////////////////////////////////////////////////
$SlideToggle$        


$(document).ready(function()
{
    $("button").click(function()
    {
        $(".all-spans").slideToggle(700 , function(){ $("button").toggle(1000)});
    });
});


////////////////////////////////////////////////////////////////

$(document).ready(function()
{
    $("button").mouseenter(function(){  //dblclcik
    $("h1").show(); //hide the text
    $("h1").css("color","red"); //change color
    //$(this).hide(); //hide button
    })

    $("button").mouseleave(function(){
        $("h1").css("color" , "blue")
        })
});

//////////////////////////////////////////////////////


$(document).ready(function()
{
   // $("button").click(function(){
        //$("h1").toggle('slow', function() { $('span').hide() });  //(speed,call back function)
    //})

    $("button").click(function()
    {
        $("h1").fadeOut(1000);
        //$("span").fadeToggle(1000);
        $("span").fadeTo(2000 , 0.3);
    });
});

//////////////////////////////////////////////////////////
$ SILDETOGGLE $


$(document).ready(function()
{
    $(".open").click(function()
    {
        $(".box").slideToggle(700 , function() { $(".open").hide()}); //should be display none
    });
});

//////////////////////////////////////////////////////////
$ FADEIN $


$(document).ready(function()
{
    $("h1").dblclick(function()
    {
        $("span").fadeIn(200);
    });
});

/////////////////////////////////////////////////////////////////////
$  CHAIN  $


$("div")
    .animate({ width:"400px" , height:"200px"} , 3000 )
    .animate({ width:"200px" , height:"100px"} , 3000 )

/////////////////////////////////////////////////////////////////////////
$  TEXT $


$(document).ready(function()
{
    var div = $("div").text();
    $("p").text( div );  //put the div text inside the empty P tag
});

/////////////////////////////////////////////////////////////////////

$ VAL and attr $

$(document).ready(function()
{
    $("button").click(function()
    {
        $("div.result").text( $("input").val())
    });
})
/////////////////////////////////////////////////////////////////////
 $ Prepend and append $


 $(document).ready(function()
{
    $("div").prepend("<p>and this is is from jQuery!</p>");
});


$(document).ready(function()
{
    $("<p>welcome there from the jQuery</p>").appendTo("div")
});

///////////////////////////////////////////////////////////////////
$ remove contains $

$(document).ready(function()
{
    $("button").click(function()
    {
        $("div").remove(":contains('thid')");
    });
});

*/