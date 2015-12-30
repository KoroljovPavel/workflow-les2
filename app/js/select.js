$(document).ready(function(){

    $('.sort__select_box').on('click', function(e){
        e.preventDefault();

        //$('.sort__select_dropdown').slideDown(300);

        if ($(this).hasClass('rotate')){
            $('.sort__select_dropdown').slideUp(300);
            $(this).removeClass('rotate');
        }else{
            $(this).addClass('rotate');
            $('.sort__select_dropdown').slideDown(300);

        }





    });

    $('.sort__select_item').on('click', function(e){
        e.preventDefault();

        console.log($(this).text());
        $('.sort__select_box')
            .html($(this).text())
            .removeClass('rotate');

        $('.sort__select_dropdown').slideUp(300);

    });




});