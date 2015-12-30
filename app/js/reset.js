$(document).ready( function() {

    // При клике по кнопке "сбросить все" убираем отметки
    $(".accordeon-inner__link_reset").click( function(e) {
        e.preventDefault();
        $("input:checkbox").attr('checked', false);
    });
});