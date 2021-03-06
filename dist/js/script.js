"use strict"

const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    autoHeight: true
});

document.querySelector('.carousel__prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.carousel__next').addEventListener('click', function () {
    slider.goTo('next');
});

$(document).ready(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(itemClass) {
        $(itemClass).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #modal__consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #modal__consultation, #modal__thanks, #modal__order').fadeOut();
    })

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#modal__order .modal__descr').text( $('.catalog-item__subtitle').eq(i).text() );
            $('.overlay, #modal__order').fadeIn();
        })
    });

    //validation
    function validateForms(formClass) {
        $(formClass).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "?????????????? ???????? ??????",
                phone: "???????????????? ???????????? ????????????",
                email: {
                    required: "?????????????? ?????????? ?????????????????????? ??????????",
                    email: "???????????????? ???????????? ???????????????????????? ????????????"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#modal__consultation form')
    validateForms('#modal__order form')

    $('input[name="phone"]').mask("+7 (999) 999-99-99");

    //smooth scroll amd pageup
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1600 ) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    })

    

    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     if (!$(this).valid()) {
    //         return;
    //     }
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#modal__consultation, #modal__order').fadeOut();
    //         $('.overlay, #modal__thanks').fadeIn();

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

});