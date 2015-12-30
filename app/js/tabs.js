$(document).ready(function(){
    $('.tabs__controls_link').on('click', function(e){
        e.preventDefault();

        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

        var item = $(this).closest('.tabs__controls_item'),
            contentItem = $('.tabs__item'),
            itemPosition = item.index();


        contentItem.eq(itemPosition)
            .add('item')
            .addClass('active')
            .css('display', 'block')
            .siblings()
            .removeClass('active')
            .css('display', 'none');




    });
});