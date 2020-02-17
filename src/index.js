import modularLoad from "modularload";
import LocomotiveScroll from "locomotive-scroll";

document.load = new modularLoad({
  enterDelay: 300,
  exitDelay: 300
});

const init = () => {
  if (!document.getElementById("app").classList.contains("enter")) {
    document.getElementById("app").classList.add("first");
    let scroll = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true
    });
  }
};

init();
document.load.on("loaded", (transition, oldContainer, newContainer) => {
  console.log("👌");
  oldContainer.style.position = "absolute";
  oldContainer.style.top = "50px";
  oldContainer.style.left = "10vw";
  newContainer.classList.add("enter");
  oldContainer.classList.add("leave");
  if (transition === "transitionName") {
    console.log("🤙");
  }
});

document.load.on("ready", (transition, newContainer) => {
  let scroll = new LocomotiveScroll({
    el: document.querySelector("#app"),
    smooth: true
  });
});
