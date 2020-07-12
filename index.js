const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClicked() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass) {
        title.classList.add(CLICKED_CLASS);
    }
    else {
        title.classList.remove(CLICKED_CLASS);
    }

    //위와 같은 결과인데, togle함수 사용, 훨씬 간단해짐
    //title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
    //클릭했을 때
}
init();

