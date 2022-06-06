"use strict"
$(function() {
    let tab = $('#tabs .tabs-items > div');
    tab.hide().filter(':first').show();
    
    // Клики по вкладкам.
    $('#tabs .tabs-nav a').click(function(){
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs .tabs-nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
    
    // Клики по якорным ссылкам.
    $('.tabs-target').click(function(){
        $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
    });
    
    // Отрытие вкладки из хеша URL
    if(window.location.hash){
        $('#tabs-nav a[href=' + window.location.hash + ']').click();
        window.scrollTo(0, $("#" . window.location.hash).offset().top);
    }
});

/**
 * Обновляет процентное число диаграммы donut и положение CSS в строке прогресса.
 * Также позволяет установить, если это donut или pie
 * @param  {string}  el      Селектор для обновления пончика. '#thing'
 * @param  {number}  percent Проходя в 22.3, будет сделано график показывать 22
 * @param  {boolean} donut   True показывает donut, false показывает pie
 */
function updateDonutChart (el, percent, donut) {
    percent = Math.round(percent);
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    let deg = Math.round(360 * (percent / 100));
    
    if (percent > 50) {
        $(el + ' .pie').css('clip', 'rect(auto, auto, auto, auto)');
        $(el + ' .right-side').css('transform', 'rotate(180deg)');
    } else {
        $(el + ' .pie').css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $(el + ' .right-side').css('transform', 'rotate(0deg)');
    }
    if (donut) {
        $(el + ' .right-side').css('border-width', '0.1em');
        $(el + ' .left-side').css('border-width', '0.1em');
        $(el + ' .shadow').css('border-width', '0.1em');
    } else {
        $(el + ' .right-side').css('border-width', '0.5em');
        $(el + ' .left-side').css('border-width', '0.5em');
        $(el + ' .shadow').css('border-width', '0.5em');
    }
    $(el + ' .num').text(percent);
    $(el + ' .left-side').css('transform', 'rotate(' + deg + 'deg)');
}

// задаем в функцию параметры
updateDonutChart('#specificChart', 63.67, true);

