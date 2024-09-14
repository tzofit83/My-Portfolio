$(document).ready(function () {
  const aboutSection = $(".about");
  const skillsSection = $(".skills");
  const aboutElements = $(".about img, .about .paragraphs p");
  const skillElements = $(".skills .skill");
  let aboutTimeouts = [];
  let skillTimeouts = [];

  function clearTimeouts(timeouts) {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    timeouts.length = 0;
  }

  function fadeInElements(elements, timeouts) {
    elements.each(function (index) {
      const timeout = setTimeout(() => {
        $(this).addClass("visible").removeClass("hidden");
      }, index * 500); 
      timeouts.push(timeout);
    });
  }

  function fadeOutElements(elements, timeouts) {
    clearTimeouts(timeouts);
    elements.each(function () {
      $(this).removeClass("visible").addClass("hidden");
    });
  }

  function checkVisibility() {
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    const aboutSectionTop = aboutSection.offset().top;
    const aboutSectionBottom = aboutSectionTop + aboutSection.outerHeight();
    if (aboutSectionBottom > viewportTop && aboutSectionTop < viewportBottom) {
      fadeInElements(aboutElements, aboutTimeouts);
    } else {
      fadeOutElements(aboutElements, aboutTimeouts);
    }

    const skillsSectionTop = skillsSection.offset().top;
    const skillsSectionBottom = skillsSectionTop + skillsSection.outerHeight();
    if (
      skillsSectionBottom > viewportTop &&
      skillsSectionTop < viewportBottom
    ) {
      fadeInElements(skillElements, skillTimeouts);
    } else {
      fadeOutElements(skillElements, skillTimeouts);
    }
  }

  aboutElements.addClass("fade-in hidden");
  skillElements.addClass("fade-in hidden");
  $(window).on("scroll resize", checkVisibility);
  checkVisibility();

  $(".hamburger").on("click", function () {
    $(".dropdown-menu").toggleClass("show");
    $(".overlay").toggleClass("show");
  });

  $(".dropdown-menu a").on("click", function () {
    $(".dropdown-menu").removeClass("show");
    $(".overlay").removeClass("show");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".hamburger, .dropdown-menu").length) {
      $(".dropdown-menu").removeClass("show");
      $(".overlay").removeClass("show");
    }
  });
});