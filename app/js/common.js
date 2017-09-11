$(function() {
	// Custom JS


    $('#navigation').slimmenu(
        {
            resizeWidth: '1000',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });


    $('.carousel-1').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        items: 1,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            }
        }
    });

    //E-mail Ajax Send
    $("#form-get-answer, #form-consult").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Заявка отправлена!");
            setTimeout(function() {
                $('.mfp-ready').css('display', 'none');
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    $('#datetimepicker').datetimepicker({
        datepicker:false,
        format:'H:i',
        mask:true,
    });


    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 2000);
            return false;
        });
    });

});
