// THSL: Portfolio 2016

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function () {
    // See if this is a touch device
    if ('ontouchstart' in window) {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');

        // Add the touch toggle to show text
        $('.job .fill-image').click(function () {
            $(this).closest('.job .fill-image').toggleClass('touchFocus');
        });
    }
});


$('#ModalJobs').on('shown', function () {
    $("body").css("overflow", "hidden");
});

$('#ModalJobs').on('hidden', function () {
    $("body").css("overflow", "visible");
});

$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});

// Faz o back do browser fechar o modal
$(".modal").on("shown.bs.modal", function () { // any time a modal is shown
    var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
    history.pushState(null, null, urlReplace); // push state that hash into the url
});

// If a pushstate has previously happened and the back button is clicked, hide any modals.
$(window).on('popstate', function () {
    $(".modal").modal('hide');
});

$('#ModalJobs').on('hidden', function () {
    $(this).removeData('modal');
});