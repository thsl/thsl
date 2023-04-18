// THSL: Portfolio 2023



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

$(document).ready(function () {
    var rellax = new Rellax('.rellax', {
        Fcenter: true
    });
});
$(document).ready(function () {
    new WOW().init();
});

$(document).ready(function () {
    //farme's guide
    $('#img-over-fg1').jParallax({ moveFactor: 5 });
    $('#img-over-fg2').jParallax({ moveFactor: 20 });

    $('#img-over-ds2').jParallax({ moveFactor: 20 });
    $('#img-over-ds3').jParallax({ moveFactor: 20 });
    $('#img-over-ds4').jParallax({ moveFactor: 20 });
    $('#img-over-ds5').jParallax({ moveFactor: 20 });

});

