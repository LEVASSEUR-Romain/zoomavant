const hauteurMax =
  document.querySelector("body").scrollHeight - window.innerHeight;
const scrollAniamtion = new Scroll("zoom", hauteurMax);
// On definie l'animation
const style = {
  0: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateY: 50,
    },
  },
  20: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateX: 10,
      translateY: 10,
    },
  },
  30: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateX: 25,
      translateY: -36,
    },
  },
  50: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateX: 25,
      translateY: -36,
    },
  },
  60: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateX: -20,
      translateY: -36,
    },
  },
  80: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateX: -20,
      translateY: -36,
    },
  },
  90: {
    position: "fixed",
    display: "block",
    transform: {
      scale: 3,
      translateX: -100,
      translateY: -36,
    },
  },
  99: {
    display: "none",
  },
};
scrollAniamtion.setStyle(style);
