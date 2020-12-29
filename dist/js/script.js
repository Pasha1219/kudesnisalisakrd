$(document).ready(function(){
    
    // Modal 

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    })

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });

    function validateForms(form){
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста ввеедите свое имя",
            phone: "Пожалуйста введите совй номер",
            email: {
              required: "Пожалуйста ввеедите свою почту",
              email: "Неправильно введен адрес почты"
            }
          }
    }); 
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');


    $('input[name=phone]').mask("+7(999) 999-9999");
    

    // Smooth scroll

        $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });

  });