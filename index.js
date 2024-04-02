// Top Container
const textWrapper = document.querySelector('#name-animated');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#name-animated .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  }).add({
    targets: '#name-animated',
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 4000
  });

anime.timeline({loop: true}) 
  .add({
    targets: '.title-h2 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1500
  }).add({
    targets: '.title-h2 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.title-h2 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.title-h2 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.title-h2 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.title-h2',
    opacity: 0,
    duration: 1100,
    easing: "easeOutExpo",
    delay: 4000
  });
  

// Mid Container
anime.timeline({loop: true})
  .add({
    targets: '.hello .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '0'
  }).add({
    targets: '.hello .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=300'
  }).add({
    targets: '.hello',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });



//For paragraph
function animateParagraph() {
  const paragraph = document.querySelector('.profile > p');
  const text = paragraph.textContent;
  paragraph.innerHTML = '';
  
  // Loop through each character and create a span for it
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = 0;
    paragraph.appendChild(span);
  });
  
  const animate = () => {
    anime.timeline({loop: false})
      .add({
        targets: '.profile > p span',
        opacity: 1,
        easing: 'linear',
        duration: 100,
        delay: (el, i) => 30 * i
      });
  };

  // Function to handle intersection observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(); // If in viewport, start animation
        observer.unobserve(paragraph); // Stop observing once animated
      } else {
        // If not in viewport, make text invisible
        anime.set('.profile > p span', { opacity: 0 });
      }
    });
  };

  // Options for the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 1 // Trigger when 100% of the paragraph is in viewport
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(paragraph); // Start observing the paragraph
}

animateParagraph();


//'Technical Skills' title animation 
const textWrapper2 = document.querySelector('.t-skills-title .letters');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.t-skills-title .line',
    translateX: [0, document.querySelector('.t-skills-title .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.t-skills-title .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.t-skills-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 6000
  });


// Logos animations
function createTimeline(targets, scaleValues, opacityValues, easingType, duration, delayPerElement, fadeInDelay) {
  anime.timeline({})
    .add({
      targets: targets + ' .word',
      opacity: 1,
      duration: 1, 
      delay: fadeInDelay
    })
    .add({
      targets: targets + ' .word',
      scale: scaleValues,
      opacity: opacityValues,
      easing: easingType,
      duration: duration,
      delay: delayPerElement
    });
}


createTimeline('#html', [14, 1], [0, 1], "easeOutCirc", 800, 800, 4000);
createTimeline('#css', [14, 1], [0, 1], "easeOutCirc", 800, 800, 4500);
createTimeline('#js', [14, 1], [0, 1], "easeOutCirc", 800, 800, 5000);
createTimeline('#python', [14, 1], [0, 1], "easeOutCirc", 800, 800, 5500);
createTimeline('#mysql', [14, 1], [0, 1], "easeOutCirc", 800, 800, 6000);
createTimeline('#bootstrap', [14, 1], [0, 1], "easeOutCirc", 800, 800,6500);
createTimeline('#git', [14, 1], [0, 1], "easeOutCirc", 800, 800, 7000);
createTimeline('#github', [14, 1], [0, 1], "easeOutCirc", 800, 800, 7500);


//'Soft Skills' title animation 
const textWrapper3 = document.querySelector('.soft-skills-title .letters');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.soft-skills-title .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.soft-skills-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 6000
  });




