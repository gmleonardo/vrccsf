AFRAME.registerComponent("movement", {
  init: function () {
    let el = this.el;
    this.animateMoving = function (e) {
      let currentPosition = el.getAttribute("position");

      let parameters = {
        property: "position",
        to: {
          x: currentPosition.x,
          y: currentPosition.y - 1,
          z: currentPosition.z,
        },
        dur: 2000,
        easing: "easeInQuad",
      };

      el.setAttribute("animation", parameters);
    };

    this.el.addEventListener("click", this.animateMoving);
  },

  remove: function () {
    this.el.removeEventListener("click", this.animateMoving);
  },
});
