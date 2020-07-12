const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    //현재시간표현
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`;
    //만약 초가 10보다 작으면 숫자 앞에 0을 넣고
    //그렇지 않으면 숫자만 표현
    
}

function init() {
    getTime();
    setInterval(getTime,1000);
    //매 초 마다 시간이 바뀌는 것을 보여주기 위함, 실시간처럼 보임
}
init(); 