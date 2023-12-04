
gsap.from("#two", {
  scrollTrigger: {
    trigger: "#two",
    start: "0% 66%",
    end: "50% 33%",
    scrub : false,
    markers: true,
    toggleActions: "play reverse play reverse"
  },
  scale:0.5,
  opacity: 0,
  duration:.5 // marche que si scrub est a false
});

