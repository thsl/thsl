// THSL: Portfolio 2014

// jQuery: collapse navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });
});

// circles (habilidades)

var colorskill;
//colorskill = ['#d5d5d5', '#666565'];
var AdicionaClasse;
AdicionaClasse = '<span class=\'percentual\'>%</span>';

var skills = Circles.create({
    id: 'skill-01',
    radius: 50,
    value: 90,
    width: 10,
    colors: ['#d5d5d5', '#165b8e'],
    text: function(value) {
        return value + AdicionaClasse;
    }
});

var skills = Circles.create({
    id: 'skill-02',
    radius: 50,
    value: 80,
    width: 10,
    colors: ['#d5d5d5', '#1d83c0'],
    text: function(value) {
        return value + AdicionaClasse;
    }
});
var skills = Circles.create({
    id: 'skill-03',
    radius: 50,
    value: 75,
    width: 10,
    colors: ['#d5d5d5', '#cc7e12'],
    text: function(value) {
        return value + AdicionaClasse;
    }
});
var skills = Circles.create({
    id: 'skill-04',
    radius: 50,
    value: 50,
    width: 10,
    colors: ['#d5d5d5', '#f49b13'],
    text: function(value) {
        return value + AdicionaClasse;
    }
});




$(function() {
    // See if this is a touch device
    if ('ontouchstart' in window) {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');

        // Add the touch toggle to show text
        $('div.boxInner img').click(function() {
            $(this).closest('.boxInner').toggleClass('touchFocus');
        });
    }
});


$('#ModalJobs').on('shown', function() {
    $("body").css("overflow", "hidden");
});

$('#ModalJobs').on('hidden', function() {
    $("body").css("overflow", "visible");
});

$('body').on('hidden.bs.modal', '.modal', function() {
    $(this).removeData('bs.modal');
});

$('.carousel').carousel({
        //interval: 5000 //changes the speed
    });

$('.met-icon').tooltip();
