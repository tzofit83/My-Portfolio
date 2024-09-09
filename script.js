$(document).ready(function () {
    const aboutSection = $('.about');
    const elements = $('.about img, .about .paragraphs p');

    function checkVisibility() {
        const sectionTop = aboutSection.offset().top;
        const sectionBottom = sectionTop + aboutSection.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
            elements.each(function (index) {
                setTimeout(() => {
                    $(this).addClass('visible').removeClass('hidden');
                }, index * 500); // Adjust the delay (500ms) as needed
            });
        } else {
            elements.each(function (index) {
                $(this).removeClass('visible').addClass('hidden');
            });
        }
    }

    elements.addClass('fade-in hidden');
    $(window).on('scroll resize', checkVisibility);
    checkVisibility();
});