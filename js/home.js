window.addEventListener('scroll', () => {
  const topRow = document.querySelector('.top-row');
  const bottomRow = document.querySelector('.bottom-row');
  const scrollY = window.scrollY;

  if (topRow) {
    topRow.style.transform = `translateX(${scrollY * 0.2}px)`;
  }

  if (bottomRow) {
    bottomRow.style.transform = `translateX(-${scrollY * 0.2}px)`;
  }
});

$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slide");
  const dots = $(".dot");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.removeClass("active").each(function(i, el) {
      const video = $(el).get(0);
      if (i === index) {
        $(el).addClass("active");
        if (video.tagName.toLowerCase() === 'video') {
          video.currentTime = 0;
          video.play();
        }
      } else {
        $(el).removeClass("active");
        if (video.tagName.toLowerCase() === 'video') {
          video.pause();
        }
      }
    });

    dots.removeClass("active").eq(index).addClass("active");
  }

  $(".next").click(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  $(".prev").click(function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  dots.each(function(index) {
    $(this).click(function() {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  setInterval(() => {
    $(".next").click();
  }, 5000);

  showSlide(currentSlide);
});
