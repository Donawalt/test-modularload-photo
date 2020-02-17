import modularLoad from "modularload";
import LocomotiveScroll from "locomotive-scroll";

let scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});

document.load = new modularLoad({
  enterDelay: 300,
  exitDelay: 300
});

const init = () => {
  if (!document.getElementById("app").classList.contains("enter")) {
    document.getElementById("app").classList.add("first");
  }
  scroll.init();
  scroll.update();
};

init();

document.load.on('loading',(oldContainer)=>{
  scroll.scrollTo(top);
});

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
  scroll.update();
  if(newContainer.dataset.namespace === 'photos'){
    console.log("rrrr")
    let text =  newContainer.querySelector('#anchorLink_1');
    text.addEventListener('click', (e)=>{
      console.log(e);
      scroll.scrollTo('#section_1');
    });
  }
});
