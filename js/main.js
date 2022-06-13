
$(window).ready(function() {
    $('.form-support').hide();
    $('#hotro').click(function() {
        $('.form-support').slideDown(500);
    })
    $('#knot').click(function() {
        $('.form-support').hide();
    })
})