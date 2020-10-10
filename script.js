AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;
        var myVideo = document.querySelector('#video');
        marker.addEventListener("markerFound", () => {
            myVideo.play()
        });
        marker.addEventListener("markerLost", () => {
            myVideo.pause();
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