$(document).ready(function() {




    // функция открытия окна формы
    function window_open(this_id, message) {

        var form_name = $('#'+this_id).attr('data-button');
        var form_title = $('#'+this_id).attr('data-title');
        var form_ym = $('#'+this_id).attr('data-ym');
        var thisid = this_id.split('_');
        //alert(this_id);

        var window_form_width = $('#contact_form').width();
        var window_form_height = $('#contact_form').height();

        if (thisid[2] == 8) { // для формы с загрузкой файла
            var window_form_height = window_form_height + 100;
        }

        var window_width = parseFloat(($(window).width()).toFixed());
        var window_height = parseFloat(($(window).height()).toFixed());

        if (message != '') {
            var window_form_height = window_form_height + 100;
        }

        if (window_width > 500) {
            var window_form_width = 500;
            //var window_form_width = window_height;
        }

        var window_form_left = (window_width / 2) - (window_form_width / 2);
        var window_form_top = (window_height / 2) - (window_form_height / 2);
        $('#contact_form').fadeIn();
        $('#contact_form').css('position', 'fixed');
        $('#contact_form').css('width', window_form_width+'px');
        $('#contact_form').css('height', window_form_height+'px');
        $('#contact_form').css('left', window_form_left+'px');
        $('#contact_form').css('top', window_form_top+'px');
        if (thisid[2] == 8) { // для формы с загрузкой файла
            $('#div_call_file').css('display', 'block');
        } else {
            $('#div_call_file').css('display', 'none');
            $('#call_file').val('');
        }
        //alert(form_name);
        $('#call_form_name').val(form_name);
        $('#call_form_ym').val(form_ym);
        $('#form_title').html(form_title);
        //$('#call_submit').attr('onclick', 'ym(56160847, "reachGoal", "'+form_ym+'"); return true;');
        $('#glass').fadeIn();
        $('#form_message').css('display', 'none');
        $('#form_message').html('');
        if (message != '') {
            $('#form_message').css('display', 'block');
            $('#form_message').html(message);
        }
        $('.button_form_close').css('display', 'block');
    }

    function window_close() {
        /* $('#contact_form').fadeOut();
         $('#glass').fadeOut();
         $('input[type=text], textarea').val('');
         $('.contact_form_fields').css('display', 'block');
         $('.contact_form_result').css('display', 'none');*/

        return new Promise(function (resolve, reject){
            $('#contact_form').fadeOut(600);
            $('#glass').fadeOut(600, function (){
                resolve();
            });
        })
    }

    function window_close_clear(){
        var flag = false;
        var normal_height = $('#contact_form').height();
        //Приводим форму к начальному размеру.
        if($('#div_call_file').css('display') == 'block'){
            //Если у формы был открыт блок для загрузки файлов, уменьшаем на 100px высоту.
            normal_height-=100;
            flag = true;
        }
        if($('#form_message').css('display') == 'block'){
            //Если у формы был открыт блок для указания сообщения, уменьшаем на 100px высоту.
            normal_height-=100;
            flag = true;
        }
        //Приводим форму к стандартному виду, закрывая необязательные поля.

        //Общее
        $('.contact-form-class').css('height', 'auto');
        $('input[type=text], textarea').val('');
        $('.contact_form_fields').css('display', 'block');
        $('.contact_form_result').css('display', 'none');
        $('.head-form-send-sales').css({'display' : 'none'});
        $("#form_title").removeClass('head-form-send-sales-item');
        $(".button_send_message").html('Отправить');
        $('#call_submitPlace').html('<button id="call_submit" class="button button_color_2 uppercase button_send_message" style="display: block;">отправить</button>\n' +
            '\t\t\t\t\t<div id="call_nosubmit" class="button button_color_4 button_send_message" style="display: none;">отправить</div>')

        /*if(type == 'budjet'){
            $('#form_title').css('display', 'block');
            $('#form_title_budjet').css('display', 'none');
            $('.budjet-block-input').css('display', 'none');
            $('.budjet_text').css('display', 'none');
        }else if(type == 'qwiz'){
            $('.form_inputs').css({'display' : 'block'});
            $('#contact_form').css({'max-width' : '1995px'});
            $('#form_title').css({'display' : 'block'});

            //$('#contact_form').height('460');
            $('#contact_form').css('width', '500px');
            $('.cf_line').css({'display' : 'block'});
            $('#qwiz_results_calc').css({'display' : 'none'});

            $('.form_header').css({'margin-top' : '-20px'});
        }*/
        if(flag) {
            $('#contact_form').css('height', normal_height + 'px');
            $('#call_form2').css('height', normal_height + 'px');
        }
    }


    // открываем форму заказа обратного звонка
    $('body').on('click', 'button[id^=goto_form_], .button_room_submit, #calc_result', function(){
        window_open(this.id, '');
    });

    $('body').on('click', '.button_form_close, .link_form_close', function(){ // закрываем форму заказа обратного звонка
        window_close().then(function (){
            window_close_clear();
        });
    });
})