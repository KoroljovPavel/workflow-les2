$(document).ready(function(){
    $('.accordeon__trigger').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.accordeon__item'),
            list = $this.closest('.accordeon__list'),
            items = list.find('.accordeon__item'),
            content = item.find('.accordeon-inner'),
            otherContent = list.find('.accordeon-inner'),
            duration = 300;

        if(!item.hasClass('active')){
            items.removeClass('active');
            item.addClass('active');
            otherContent.stop(true, true).slideUp(duration);
            content.slideDown(duration);
        }else{
            content.slideUp(duration);
            item.removeClass('active');
        }



    });


}); // -> ready end