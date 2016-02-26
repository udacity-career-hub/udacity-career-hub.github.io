$(document).ready(function() {

    $(".enrollment_card .more").readmore({
        speed: 75,
        lessLink: '<a href="#">See Less</a>',
        moreLink: '<a href="#">See More</a>'
    });

    $(".requirements .more").readmore({
        speed: 75,
        lessLink: '<a href="#">See Less</a>',
        moreLink: '<a href="#">See More</a>',
        afterToggle: function(trigger, element, expanded) {
            if(! expanded) {
              $('html, body').animate( { scrollTop: element.offset().top }, { duration: 300 } );
            }
        }
    });

    $(document).on('opening', '.success_video', function() {
        var vimeo_id  = "137656778"
        var vimeo_url = "https://player.vimeo.com/video/" + vimeo_id + "?autoplay=1?color=f08c35&title=0&byline=0&portrait=0";
        $("#student_video").attr('src', vimeo_url);
    });

    $(document).on('closing', '.success_video', function() {
        $("#student_video").attr('src', '');
    });

    $(".close_banner").click(function( click ) {
        $(".top_banner").slideUp();
        click.preventDefault();
    });

    $(".nav_toggle").click(function( click ) {
        $("nav").toggleClass("nav--on");
        click.preventDefault();
    });

    $(".footer_nav_toggle h3").click(function( click ) {
        $(this).parent().toggleClass("nav--on");
        click.preventDefault();
    });

    $(".filter_toggle").click(function( click ) {
        $(".fields_contain").toggleClass("filter--on");
        click.preventDefault();
    });

    $(".view_toggle .grid").click(function( click ) {
        $(this).addClass("active");
        $(".view_toggle .list").removeClass("active");
        $(".category_block").removeClass("list--on");
        $(".category_block").addClass("grid--on");
        click.preventDefault();
    });

    $(".view_toggle .list").click(function( click ) {
        $(this).addClass("active");
        $(".view_toggle .grid").removeClass("active");
        $(".category_block").removeClass("grid--on");
        $(".category_block").addClass("list--on");
        click.preventDefault();
    });

    $(".signup_tab a").click(function( click ) {
        $(".signup_contain").removeClass("signin--on");
        $(".signup_contain").addClass("signup--on");
        click.preventDefault();
    });

    $(".signin_tab a").click(function( click ) {
        $(".signup_contain").removeClass("signup--on");
        $(".signup_contain").addClass("signin--on");
        click.preventDefault();
    });

    $(".what_get_tab a").click(function( click ) {
        $(".tabs_contain").removeClass("what_is--on");
        $(".tabs_contain").addClass("what_get--on");
        click.preventDefault();
    });

    $(".what_is_tab a").click(function( click ) {
        $(".tabs_contain").removeClass("what_get--on");
        $(".tabs_contain").addClass("what_is--on");
        click.preventDefault();
    });

    $(".message_toggle").click(function( click ) {
        $(".message_contain").addClass("message--on");
        click.preventDefault();
    });

    $(".message_close").click(function( click ) {
        $(".message_contain").removeClass("message--on");
        click.preventDefault();
    });

    $(".enroll_next").click(function( click ) {
        $(".enroll_form").addClass("step_two--on");
        click.preventDefault();
    });

    $(".credit_card").click(function( click ) {
        $(".credit_card_type").addClass("visa");
        click.preventDefault();
    });

    $(document).on("click", function( click ) {
        if (!$(click.target).hasClass("tooltip")) {
            $(".tooltip").removeClass("tooltip--on");
        }
    });

    $(".tooltip").click(function( click ) {
        $(this).toggleClass("tooltip--on");
        click.preventDefault();
    });

    $(".style_select").ddslick({
        imagePosition: "left"
    });

    $(".nanodegree_cards").viewportChecker({
        classToAdd: "visible"
    });

    $('.nd_slider').flexslider({
        animation: "fade"
    });

    $('.arrow_slider').flexslider({
        animation: "slide"
    });

    $('.big_slider').flexslider({
        animation: "slide"
    });

    $(".scroll_pane").each(function() {
        $(this).jScrollPane({
            showArrows: $(this).is(".arrow"),
            hideFocus: true,
            animateScroll: true,
            animateDuration: 200,
            keyboardSpeed: 120
        });

        var api = $(this).data("jsp");
        var throttleTimeout;

        $(window).bind("resize",function() {
            if (!throttleTimeout) { throttleTimeout = setTimeout(function() {
                api.reinitialise();
                throttleTimeout = null;
            }, 50);}
        });
    });

    $(window).bind("load resize",function() {
        $(".tooltip_content").each(function() {
            var offset = $(this).offset();
            var spaceNeeded = ($(this).width() + 24);
            var minSpace = ($(window).width() - offset.left);

            if (minSpace < spaceNeeded) {
                $(this).parent().addClass("right");
            } else {
                $(this).parent().removeClass("right");
            }

            if (offset.left < 24 ) {
                $(this).parent().addClass("left");
            } else {
                $(this).parent().removeClass("left");
            }
        });
    });
});
