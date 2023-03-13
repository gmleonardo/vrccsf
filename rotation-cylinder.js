AFRAME.registerComponent("rotation-cylinder", {
  init: function () {
    let el = this.el;

    

    this.rotationCylinder = function () {
      el.setAttribute("animation", {
        property: "rotation",
        to: "360 0 0",
        loop: true,
        dur: 3000,
      });
    };
    this.el.addEventListener("click", this.rotationCylinder);
  },

  remove: function () {
    el.removeAttribute("animation");
  },
});
