const stars = document.querySelectorAll(".star");
const emojiEl = document.querySelector(".emoji");
const statusEl = document.querySelector(".status");
const defaultRatingIndex = 0;
let currentRatingIndex = 0;

const ratings = [
  { emoji: "", name: "Give us rating" },
  { emoji: "😔", name: "Very Poor" },
  { emoji: "🙁", name: "Poor" },
  { emoji: "🙂", name: "Good" },
  { emoji: "🤩", name: "Very Good" },
  { emoji: "🥰", name: "Excellent" }
];

const checkSelectedStar = (star) => {
  if (parseInt(star.getAttribute("data-rate")) === currentRatingIndex) {
    return true;
  } else {
    return false;
  }
};

const setRating = (index) => {
  stars.forEach((star) => star.classList.remove("selected"));
  if (index > 0 && index <= stars.length) {
    document
      .querySelector('[data-rate="' + index + '"]')
      .classList.add("selected");
  }
  emojiEl.innerHTML = ratings[index].emoji;
  statusEl.innerHTML = ratings[index].name;
};

const resetRating = () => {
  currentRatingIndex = defaultRatingIndex;
  setRating(defaultRatingIndex);
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    if (checkSelectedStar(star)) {
      resetRating();
      return;
    }
    const index = parseInt(star.getAttribute("data-rate"));
    currentRatingIndex = index;
    setRating(index);
  });

  star.addEventListener("mouseover", function () {
    const index = parseInt(star.getAttribute("data-rate"));
    setRating(index);
  });

  star.addEventListener("mouseout", function () {
    setRating(currentRatingIndex);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  setRating(defaultRatingIndex);
});


/*.....glow card.....*/
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'

if (!CSS.supports('animation-timeline: scroll()')) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.set('section', { '--base': 0 })
  gsap.to('section', {
    '--base': 320,
    ease: 'none',
    scrollTrigger: {
      horizontal: true,
      scrub: true,
      scroller: 'ul',
    },
  })
  const ITEMS = document.querySelectorAll('li')
  ITEMS.forEach((ITEM) => {
    gsap
      .timeline()
      .set(ITEM, { '--sat': 0 })
      .to(ITEM, {
        '--sat': 100,
        scrollTrigger: {
          trigger: ITEM,
          start: 'right 75%',
          end: 'center center',
          horizontal: true,
          scrub: true,
          scroller: 'ul',
        },
      })
      .fromTo(
        ITEM,
        { '--sat': 100 },
        {
          '--sat': 0,
          scrollTrigger: {
            trigger: ITEM,
            end: 'left 25%',
            start: 'center center',
            horizontal: true,
            scrub: true,
            scroller: 'ul',
          },
        }
      )
  })
}


const syncPointer = ({ x, y }) => {
  document.documentElement.style.setProperty('--px', x.toFixed(2))
  document.documentElement.style.setProperty('--py', y.toFixed(2))
}
document.body.addEventListener('pointermove', syncPointer)