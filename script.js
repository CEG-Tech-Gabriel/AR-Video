AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;
        var myVideo = document.querySelector('#video');
        var buttons = document.getElementsByClassName("buttons");
        var cursor = document.getElementById("#cursor")

        marker.addEventListener("markerFound", () => {
            cursor.style.visibility = "hidden";
            myVideo.play();
            for (let btn of buttons) {
                btn.style.visibility = "visible";
            };
        });
        marker.addEventListener("markerLost", () => {
            myVideo.pause();
            cursor.style.visibility = "visible";
            for (let btn of buttons) {
                btn.style.visibility = "hidden";
            };
        });
    }
});

window.onload = () => {
    var myVideo = document.querySelector('#video');
    document.querySelector(".say-hi-button").addEventListener("click", () => {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
        }
    });
};