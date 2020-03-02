jQuery(function($){
    var d = $.datepicker.regional['ro'];
    d.buttonText = 'Deschidere calendar';
    d.resetButtonText = 'Resetare dată';
    $.datepicker.setDefaults($.datepicker.regional['ro'])
});