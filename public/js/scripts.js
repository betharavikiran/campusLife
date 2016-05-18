function switchtab(tab){
    $('.tabs a, .tabcontent').removeClass('active');
    var targettab = $('.tabs a[data-target=' + tab + ']');
    var targetcontent = $('#'+tab);
    $(targettab).addClass('active');
    $(targetcontent).addClass('active');
}

