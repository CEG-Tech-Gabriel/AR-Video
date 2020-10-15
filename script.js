AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;
        var myVideo = document.querySelector('#video');
        var buttons = document.getElementsByClassName("buttons");
        var cursor = document.querySelector("a-cursor")

        marker.addEventListener("markerFound", () => {
            cursor.object3D.visible = false;// update visibility at the three.js level 
            //cursor.setAttribute("visible", "false")
            myVideo.play();
            for (let btn of buttons) {
                btn.style.visibility = "visible";
            };
        });
        marker.addEventListener("markerLost", () => {
            myVideo.pause();
            cursor.object3D.visible = true;// update visibility at the three.js level 
            //cursor.setAttribute("visible", "true")
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