$(document).ready(function () {
    $('#type').on('click', 'a', function () {
        $('.current').not($(this).closest('td').addClass('current')).removeClass('current');
        // fade out all open subcontents
        $('.selected:visible').hide();
        // fade in new selected subcontent
        $('.selected[id=' + $(this).attr('data-id') + ']').show();
    }).find('a:first').click();
});