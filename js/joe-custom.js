// $(document).foundation();

(function($) {
  let homeURL = 'http://localhost/joe-simon/'
  // --------- Homepage ----------- //

  // --------- gets testimonials and podcasts from JSON ---------- //
  $.ajax({
    dataType: 'json',
    url: homeURL + 'wp-content/themes/joe-custom/js/homepage.json'
  })
  .done(function(obj) {
    console.log('Work')

    // array of podcasts
    let podArr = obj.podcasts
    podArr.forEach(buildPodcast)

    // --- array of testimonials
    let tArr = obj.testimonials
    tArr.forEach(buildTestimonial)
    // builds carousel for testimonials
    buildCarousel()
  })
  .fail(function() {
    console.log('FAIL')
  })

  // ---------------- sticky nav ----------------- //



  // ----- call to action btn in hero image-------//
  let hoverCTA = '.cta'

  $(hoverCTA).hover(
    function() {
      let btn = '#' + $(this)[0].id
      $(btn + ' .btn').addClass( "btn-hover" )
      $(btn + ' .btn p').addClass( "btn-hover-p" )
    },
    function() {
      let btn = '#' + $(this)[0].id
      $(btn + ' .btn').removeClass( "btn-hover" )
      $(btn + ' .btn p').removeClass( "btn-hover-p" )
    }
  )

  // --------------- featured podcasts -------------------- //
  let podGrid = $('.grid-wrap')
  const buildPodcast = (pod, i) => {

    let podcast =
    `
    <a href='${pod.link}' class='podcast'>
    <div class='podcast-wrap'>
    <img src="${pod.img}" alt="${pod.title} Image">
    <p class='pod-title'>${pod.title}</p>
    <p class='pod-desc'>${pod.desc}</p>
    </div>
    </a>
    `
    podGrid.append(podcast)
  }

  // ----------- show/hide "Joe's Story" on click - On homepage ----------- //

  // height of intro paragraph
  let firstHeight = $('.fullContent .first').height()

  $('.fullContent').readmore({
    collapsedHeight: firstHeight + 20,
    moreLink: "<p class='showMore'>Read whole story <i class='fa fa-caret-square-o-down' aria-hidden='true'></i></p>",
    lessLink: `<p class='showLess'>See less <i class="fa fa-caret-square-o-up" aria-hidden="true"></i></p>`
  })

  // ------------- testimonials slider --------------------- //

  let tCarousel = $('.testimonials-wrap')

  const buildTestimonial = (t, i) => {
    // t = single testimonial
    let testimonial =
    `
    <div class='single-testimonial'>
    <div class='thumb'>
    <i class="fa fa-thumbs-up fa-4x" aria-hidden="true"></i>
    </div>
    <div class='details'>
    <div class='desc'>"${t.desc}"</div>
    <div class='title'>- ${t.title}</div>
    </div>
    </div>
    `

    tCarousel.append(testimonial)
  }

  const buildCarousel = () => {
    tCarousel.slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
  }

  //-------------- process timeline -------------------- //
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  let items = document.querySelectorAll(".process li");

  // code for the isElementInViewport function

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view")
      }
    }
  }

  window.addEventListener("load", callbackFunc)
  window.addEventListener("scroll", callbackFunc)

})(jQuery)
