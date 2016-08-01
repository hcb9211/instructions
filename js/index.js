var height=$(window).height();
$("main").height(height-52);
$(".nav>li").each(function () {
    $(".nav li").hover(function () {
        $(this).css({
            background:"#FD9077",
            color:"black"
        })
    },function () {
        $(this).css({
            background:"none",
            color:"green"
        })
    })
})
