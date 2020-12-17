$(document).ready(function() {

    $(".speaker-thumb").mouseenter(function(){
        $(this).addClass("hover");
    })
    $(".speaker-thumb").mouseleave(function(){
        $(this).removeClass("hover");
    })


    $(".registerNow").mouseenter(function () {
        $(this).addClass("hoverNow");
    })
    $(".registerNow").mouseleave(function () {
        $(this).removeClass("hoverNow");
    })
    $(".registerNow").click(function () {
        $('html, body').animate({
            scrollTop: $("#register").offset().top
        }, 1000);
    });

    $(".scheduleNow").mouseenter(function () {
        $(this).addClass("hoverNow");
    })
    $(".scheduleNow").mouseleave(function () {
        $(this).removeClass("hoverNow");
    })
    $(".scheduleNow").click(function () {
        $('html, body').animate({
            scrollTop: $("#schedule").offset().top
        }, 1000);
    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    //People
        // $(".hiddenItem").hide();
        // $(".scheduleItem").click(function () {
        //     $(this).children(".hiddenItem").toggle();
        // })

        // //Hovering CSS
        // $(".schedulePointer").mouseenter(function () {
        //     $(this).addClass("schedulePointer");
        // })
        // $(".schedulePointer").mouseleave(function () {
        //     $(this).removeClass("schedulePointer");
        // })

});

// var deadline = new Date("apr 28, 2020 7:30:00").getTime();

// var x = setInterval(function () {

//     var now = new Date().getTime();
//     var t = deadline - now;
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((t % (1000 * 60)) / 1000);
//     document.getElementById("day").innerHTML = days;
//     document.getElementById("hour").innerHTML = hours;
//     document.getElementById("minute").innerHTML = minutes;
//     document.getElementById("second").innerHTML = seconds;
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "TIME UP";
//         document.getElementById("day").innerHTML = '0';
//         document.getElementById("hour").innerHTML = '0';
//         document.getElementById("minute").innerHTML = '0';
//         document.getElementById("second").innerHTML = '0';
//     }
// }, 1000);