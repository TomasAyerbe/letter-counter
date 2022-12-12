var counter = 0;

$(document).ready(function() {
    $('#counter').text(counter);

    $('#word').keyup(function() {
        counter = $('#word').val().length;

        $('#counter').text(counter);
    });
});