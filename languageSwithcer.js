function languageChange() {
    var aktifDil = localStorage.getItem('language');
    if (localStorage.getItem('language') == null) {
        localStorage.setItem('language', 'en');
        aktifDil = "en";
        console.log("Default Dil :", localStorage.getItem('language'));
    } else {
        console.log("Seçili Dil :", localStorage.getItem('language'));
    }
    $.each(lang.language[aktifDil], function(i, item) {
        $('*[key=' + i + ']').html(item);
    });
    $.each(lang.placeholder[aktifDil], function(i, item) {
        $('*[key=' + i + ']').attr("placeholder", item);
        console.log(i);
    });
}

function dilDegis(){
    console.log($('#select-language').val());
    dilSet($('#select-language').val());
}
