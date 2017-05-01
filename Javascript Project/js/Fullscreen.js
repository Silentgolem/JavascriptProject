"use strict";
$('#MasterDiv').dblclick(function () {
    Fullscreen();
})

function Fullscreen() {
    var MasterDiv = document.getElementById('MasterDiv');
    if (MasterDiv.requestFullscreen) {
        MasterDiv.requestFullscreen();
    } else if (MasterDiv.mozRequestFullScreen) {
        MasterDiv.mozRequestFullScreen();
    } else if (MasterDiv.webkitRequestFullscreen) {
        MasterDiv.webkitRequestFullscreen();
    }
}