const loadingAnimationTime = 2000

const showMainAnimation = (parent) => {
    const boxContainer = document.createElement("div");
    const arrow = document.getElementById("arrow");

    boxContainer.style.overflow = "hidden";
    const box = document.createElement("div");
    box.classList.add("box", "flex");
    parent.appendChild(boxContainer);
    boxContainer.appendChild(box);
    const quote = ["schön", "dass", "du", "da", "bist"];
    let delay = 0;
    const lastAnimationTime = 1000 + delay;

    let firstWord = document.createElement("span");
    firstWord.textContent = "Hej";
    firstWord.classList.add("animate-slideup");
    delay = delay + 22;
    firstWord.style.animationDelay = delay + "ms";
    box.appendChild(firstWord);

    let comma = document.createElement("span");
    comma.textContent = ",";
    comma.classList.add("comma", "box");
    box.appendChild(comma);

    for (let word in quote){
        let text = document.createElement("span");
        text.textContent = quote[word];
        text.classList.add("animate-slideup");
        delay = delay + 22;
        text.style.animationDelay = delay + "ms";
        box.appendChild(text);
    }

  let text = document.createElement("span");
  text.textContent = ".";
  text.classList.add("rotate");
  text.style.animationDelay = lastAnimationTime - 100 + "ms";
  box.appendChild(text);

  arrow.classList.add("flex", "animate-slideup");
  boxContainer.appendChild(arrow);
};

const revealCurtain = (parent) => {
    const curtain = document.createElement("div");
    curtain.classList.add("flex", "curtain");
    parent.appendChild(curtain);
    const progressBar = document.createElement("div");
    progressBar.classList.add("progressBar");
    curtain.appendChild(progressBar);
    progressBar.classList.add("progressGrow-animation");  
    return curtain;
};

function OnAnimationEnd() {
    const arrow = document.getElementById("arrow");
    console.log("Event done");
    arrow.classList.remove("animate-slideup");
    arrow.classList.add("blink");
}

const init = () => {
    const container = document.getElementById("main");
    const curtain = revealCurtain(container);
    setTimeout(() => {
        container.removeChild(curtain);
        showMainAnimation(container);
    }, loadingAnimationTime + 100)
};

init();

// sort animations for blinking arrow on landing page
const animatedDivs = document.getElementsByClassName("flex");
animatedDivs[0].addEventListener("webkitAnimationEnd", OnAnimationEnd);

// animate text on mouse hover
mouseTarget = document.getElementsByClassName("lookAt");
mouseTarget[0].addEventListener('mouseenter', e => {
    mouseTarget[1].classList.add("animate-slideup");
    mouseTarget[1].classList.remove("hide");
    mouseTarget[0].classList.remove("blink");
  });

