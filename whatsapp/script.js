
let menuBar;
let fixedMenu;
let statusBar;
let chartBar;
let active;
let callBar;
let chatCallStatus;

window.onload = function () {

    setTimeout(() => {
        document.querySelector('body').style.opacity = '1';
    }, 500);

    menuBar = document.querySelector('.menu-bar');
    fixedMenu = menuBar.offsetTop;
    statusBar = document.querySelector('.status-container');
    chartBar = document.querySelector('.chat-container');
    active = document.getElementsByClassName('menu-bar__list-item');
    callBar = document.querySelector('.call-container');
    chatCallStatus = document.querySelector('.chat-status-call');
    statusBar.remove();
    callBar.remove();
    changeTab(1);


    window.onscroll = function () {

        if (window.pageYOffset >= fixedMenu) {
            menuBar.classList.add("fixed-menu")
        } else {
            menuBar.classList.remove("fixed-menu");
        }
    }
}

function changeTab(index) {

    for (var i = 0; i < 3; i++)
        active[i].classList.remove('active-select-menu');
    active[index - 1].classList.add('active-select-menu');
    if (index == 1) {
        statusBar.remove();
        callBar.remove()
        $(chatCallStatus).append(chartBar);

    }
    else if (index == 2) {
        chartBar.remove();
        callBar.remove();
        $(chatCallStatus).append(statusBar);

    }

    else if (index == 3) {
        chartBar.remove();
        statusBar.remove();
        $(chatCallStatus).append(callBar);
    }

}